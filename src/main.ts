// Copyright (c) 2023. Heusala Group <info@heusalagroup.fi>. All rights reserved.

import { ProcessUtils } from "./fi/hg/core/ProcessUtils";

// Must be first import to define environment variables before anything else
ProcessUtils.initEnvFromDefaultFiles();

import {
    COMMAND_NAME,
    LOG_LEVEL
} from "./constants/runtime";

import { LogService } from "./fi/hg/core/LogService";
import { LogLevel } from "./fi/hg/core/types/LogLevel";

LogService.setLogLevel(LOG_LEVEL);
ProcessUtils.setLogLevel(LOG_LEVEL);

import { CommandExitStatus } from "./fi/hg/core/cmd/types/CommandExitStatus";
import { RequestClient } from "./fi/hg/core/RequestClient";
import { CommandArgumentUtils } from "./fi/hg/core/cmd/utils/CommandArgumentUtils";
import { ParsedCommandArgumentStatus } from "./fi/hg/core/cmd/types/ParsedCommandArgumentStatus";
import { Headers } from "./fi/hg/core/request/Headers";
import { BUILD_USAGE_URL, BUILD_WITH_FULL_USAGE } from "./constants/build";
import { HgCommandServiceImpl } from "./fi/hg/core/cmd/hg/HgCommandServiceImpl";
import { HgCommandService } from "./fi/hg/core/cmd/hg/HgCommandService";
import { parseNonEmptyString } from "./fi/hg/core/types/String";
import { HgAiCommandServiceImpl } from "./fi/hg/core/cmd/ai/HgAiCommandServiceImpl";
import { HgAiCommandService } from "./fi/hg/core/cmd/ai/HgAiCommandService";
import { HttpOpenAiClient } from "./fi/hg/core/openai/HttpOpenAiClient";
import { OpenAiClient } from "./fi/hg/core/openai/OpenAiClient";
import { HgNode } from "./fi/hg/node/HgNode";

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

        const {scriptName, parseStatus, exitStatus, errorString, freeArgs} = CommandArgumentUtils.parseArguments(COMMAND_NAME, args);

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

    -h --help          Print help
    -v --version       Print version
    --                 Disables option parsing

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
