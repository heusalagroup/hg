// Copyright (c) 2023. Heusala Group <info@heusalagroup.fi>. All rights reserved.

import { ProcessUtils } from "./fi/hg/core/ProcessUtils";
import { COMMAND_NAME, LOG_LEVEL } from "./constants/runtime";

import { LogService } from "./fi/hg/core/LogService";
import { LogLevel } from "./fi/hg/core/types/LogLevel";
import { CommandExitStatus } from "./fi/hg/core/cmd/types/CommandExitStatus";
import { RequestClient } from "./fi/hg/core/RequestClient";
import { ArgumentType, CommandArgumentUtils } from "./fi/hg/core/cmd/utils/CommandArgumentUtils";
import { ParsedCommandArgumentStatus } from "./fi/hg/core/cmd/types/ParsedCommandArgumentStatus";
import { Headers } from "./fi/hg/core/request/Headers";
import { BUILD_USAGE_URL, BUILD_WITH_FULL_USAGE } from "./constants/build";
import { HgCommandServiceImpl } from "./fi/hg/core/cmd/hg/HgCommandServiceImpl";
import { HgCommandService } from "./fi/hg/core/cmd/hg/HgCommandService";
import { isString, parseNonEmptyString } from "./fi/hg/core/types/String";
import { HgAiCommandServiceImpl } from "./fi/hg/core/cmd/ai/HgAiCommandServiceImpl";
import { HgAiCommandService } from "./fi/hg/core/cmd/ai/HgAiCommandService";
import { HttpOpenAiClient } from "./fi/hg/core/openai/HttpOpenAiClient";
import { OpenAiClient } from "./fi/hg/core/openai/OpenAiClient";
import { HgNode } from "./fi/hg/node/HgNode";
import { NodeRequestClient } from "./fi/hg/node/requestClient/node/NodeRequestClient";
import { isNumber } from "./fi/hg/core/types/Number";
import { isBoolean } from "./fi/hg/core/types/Boolean";

// Must be first import to define environment variables before anything else
ProcessUtils.initEnvFromDefaultFiles();

LogService.setLogLevel(LOG_LEVEL);
ProcessUtils.setLogLevel(LOG_LEVEL);

LogService.setLogLevel(LOG_LEVEL);
ProcessUtils.setLogLevel(LOG_LEVEL);
NodeRequestClient.setLogLevel(LOG_LEVEL >= LogLevel.INFO ? LogLevel.NONE : LOG_LEVEL);

const LOG = LogService.createLogger('main');

const OPENAI_API_KEY : string = parseNonEmptyString(process?.env?.OPENAI_API_KEY) ?? '';
process.env.OPENAI_API_KEY = '';

export async function main (
    args: string[] = []
) : Promise<CommandExitStatus> {

    try {

        HgNode.initialize();

        Headers.setLogLevel(LogLevel.INFO);
        RequestClient.setLogLevel(LogLevel.INFO);

        LOG.debug(`Loglevel as ${LogService.getLogLevelString()}`);

        const {
            scriptName,
            parseStatus,
            exitStatus,
            errorString,
            freeArgs,
            userArgs
        } = CommandArgumentUtils.parseArguments(
            COMMAND_NAME,
            args,
            {
                'language'         : [ArgumentType.STRING   , '--language',           '-l'],
                'model'            : [ArgumentType.STRING   , '--model',              '-m'],
                'suffix'           : [ArgumentType.STRING   , '--suffix',             '-s'],
                'stop'             : [ArgumentType.STRING   , '--stop',               '-S'],
                'user'             : [ArgumentType.STRING   , '--user',               '-u'],
                'logProbs'         : [ArgumentType.INTEGER  , '--logprobs',           '-L'],
                'bestOf'           : [ArgumentType.INTEGER  , '--best-of',            '-b'],
                'presencePenalty'  : [ArgumentType.NUMBER   , '--presence-penalty',   '-P'],
                'frequencyPenalty' : [ArgumentType.NUMBER   , '--frequency-penalty',  '-f'],
                'echo'             : [ArgumentType.BOOLEAN  , '--echo',               '-e'],
                'n'                : [ArgumentType.INTEGER  , '--n',                  '-n'],
                'topP'             : [ArgumentType.NUMBER   , '--top-p',              '-p'],
                'temperature'      : [ArgumentType.NUMBER   , '--temperature',        '-t'],
                'maxTokens'        : [ArgumentType.INTEGER  , '--max-tokens',         '-T'],
            }
        );

        if ( parseStatus === ParsedCommandArgumentStatus.HELP || parseStatus === ParsedCommandArgumentStatus.VERSION ) {
            console.log(getMainUsage(scriptName));
            return exitStatus;
        }

        if (errorString) {
            console.error(`ERROR: ${errorString}`);
            return exitStatus;
        }

        ProcessUtils.setupDestroyHandler( () => {

            LOG.debug('Stopping command from process utils event');

        }, (err : any) => {
            LOG.error('Error while shutting down the service: ', err);
        });

        const aiClient : OpenAiClient = new HttpOpenAiClient(OPENAI_API_KEY);
        const ai : HgAiCommandService = new HgAiCommandServiceImpl(aiClient);

        if (isString(userArgs?.language)) ai.setLanguage(userArgs?.language);
        if (isString(userArgs?.model)) ai.setModel(userArgs?.model);
        if (isString(userArgs?.suffix)) ai.setSuffix(userArgs?.suffix);
        if (isString(userArgs?.stop)) ai.setStop(userArgs?.stop);
        if (isString(userArgs?.user)) ai.setUser(userArgs?.user);
        if (isNumber(userArgs?.logProbs)) ai.setLogProbs(userArgs?.logProbs);
        if (isNumber(userArgs?.bestOf)) ai.setBestOf(userArgs?.bestOf);
        if (isNumber(userArgs?.presencePenalty)) ai.setPresencePenalty(userArgs?.presencePenalty);
        if (isNumber(userArgs?.frequencyPenalty)) ai.setFrequencyPenalty(userArgs?.frequencyPenalty);
        if (isBoolean(userArgs?.echo)) ai.setEcho(userArgs?.echo);
        if (isNumber(userArgs?.n)) ai.setN(userArgs?.n);
        if (isNumber(userArgs?.topP)) ai.setTopP(userArgs?.topP);
        if (isNumber(userArgs?.temperature)) ai.setTemperature(userArgs?.temperature);
        if (isNumber(userArgs?.maxTokens)) ai.setMaxTokens(userArgs?.maxTokens);

        const hg : HgCommandService = new HgCommandServiceImpl(ai);
        const ret = await hg.main(freeArgs);
        if (ret === CommandExitStatus.USAGE) {
            console.log(getMainUsage(scriptName));
            return CommandExitStatus.USAGE;
        }
        return ret;

    } catch (err) {
        LOG.error(`Fatal error: `, err);
        return CommandExitStatus.FATAL_ERROR;
    }

}

/**
 *
 * @param scriptName
 * @nosideeffects
 * @__PURE__
 */
export function getMainUsage (
    scriptName: string
): string {

    /* @__PURE__ */if ( /* @__PURE__ */BUILD_WITH_FULL_USAGE ) {

        return `USAGE: ${/* @__PURE__ */scriptName} [OPT(s)] ARG(1) [...ARG(N)]

  Heusala Group CLI tool.
  
...and OPT is one of:

    -h --help                Print help
    -v --version             Print version
    --                       Disables option parsing

...and 'hg ai' options are:

    -m --model=NAME             OpenAI Model to use
    -i --suffix=STR             Text that comes after completion of inserted text
    -s --stop=STR               Up to 4 sequences where the API will stop
    -u --user=STR               Unique identifier representing your end-user
    -l --logprobs=INT           Include the log probabilities
    -b --best-of=INT            Amount of completions to generate server-side
    -r --presence-penalty=NUM   Presence penalty between -2.0 and 2.0
    -f --frequency-penalty=NUM  Frequency penalty between -2.0 and 2.0
    -e --echo[=false]           Echo back the prompt in addition
    -n --n=INT                  How many completions to generate for each prompt
    -p --top-p=NUM              Alternative sampling temperature
    -t --temperature=NUM        Sampling temperature
    -x --max-tokens=INT         Maximum number of tokens to generate

...and ARG is one of:

    hg ai desc[ribe] [verbose] CODE            Describe code [in detail]
    hg ai doc[ument] CODE                      Document code
    hg ai test CODE                            Write tests for code
    hg ai comp[letion] PROMPT [..PROMPT2]      OpenAI completion request
    hg ai edit INSTRUCTION [INPUT [..INPUT2]]  OpenAI edit request

  If the argument is a file, it will be read and replaces.

  Environment variables:

    LOG_LEVEL as one of:
    
      ALL
      DEBUG
      INFO
      WARN
      ERROR
      NONE
`;
    } else {
        return `USAGE: ${/* @__PURE__ */scriptName} ARG(1) [...ARG(N)]
See ${/* @__PURE__ */BUILD_USAGE_URL}
`;
    }
}
