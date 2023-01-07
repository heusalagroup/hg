# @heusalagroup/hg

This is CLI tool for Heusala Group's development team.

### Install the command globally

```shell
npm i -g @heusalagroup/hg
```

...or..

```shell
git clone git@github.com:heusalagroup/hg.git hg
cd hg
npm i -g .
```


### Use it

```shell
hg --help 
```

### Use the OpenAI API for editing

This tool requires the `API KEY` in the environment variable:

```shell
export OPENAI_API_KEY='your-key-here'
```

You can also save it in the local `./.env` file:

```
OPENAI_API_KEY=your-key-here
```

Using the tool is easy:

```shell
$ node dist/hg.js ai edit 'Fix translation errors' "This wek is good"
This week is good
```

You can also use files:

```shell
$ node dist/hg.js ai edit 'Fix language mistakes' ./README.md
# @heusalagroup/hg

This is CLI tool for Heusala Group's development team.

...
```

The Completion API is also available:

```shell
$ node dist/hg.js ai comp 'I would like to...'


1. Learn a new language
2. Explore a new country

```
