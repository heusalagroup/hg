# @heusalagroup/hg

This is CLI tool for Heusala Group's development team.

### Install the command globally

```shell
npm i -g @@heusalagroup/hg
```

### Use it

```shell
hg --help 
```

### Use the OpenAI API for editing

This tool requires the API KEY in the environment variable:

```shell
export OPENAI_API_KEY='...'
```

You can also save it in the local `./.env` file:

```
OPENAI_API_KEY=...
```

Using the tool is easy:

```shell
$ node dist/hg.js ai edit 'Fix translation errors' "This wek is good"
This week is good

$ node dist/hg.js ai comp 'I would like to...'


1. Learn a new language
2. Explore a new country

```
