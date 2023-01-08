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

### Using the tool is easy

```shell
$ node dist/hg.js ai edit 'Fix translation errors' "This wek is good"
This week is good
```

### You can also use files

```shell
$ node dist/hg.js ai edit 'Fix language mistakes' ./README.md
# @heusalagroup/hg

This is CLI tool for Heusala Group's development team.

...
```

### The Completion API is available

```shell
$ node dist/hg.js ai comp 'I would like to...'


1. Learn a new language
2. Explore a new country

```

### You can also customize the settings

````shell
$ hg ai --model='code-davinci-edit-001' --temperature=0 --max-tokens=50 edit 'Write a function in python that calculates fibonacci'
def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))

````

### Describe source code

Short description:

```shell
$ hg ai desc ./keys.ts

This TypeScript code is a function called "keys" that takes two parameters: 
"value" and "isKey". The function checks if the "value" is an array or an 
object, and then filters the keys of the array or object based on the "isKey" 
parameter. The function returns an array of the filtered keys.

```

More detail:

```shell
$ hg ai desc verbose ./keys.ts

This TypeScript code is a function called "keys" that takes two parameters: 
"value" and "isKey". The "value" parameter is of type "any" and the "isKey" 
parameter is of type "TestCallbackNonStandard". The function returns an array of
 type "T" which is a generic type that extends the type "keyof any".

The function starts by checking if the "value" parameter is an array. If it is, 
it uses the "map" function to create an array of indexes from the "value" array. 
It then uses the "filter" function to filter out any indexes that don't match 
the "isKey" parameter. The filtered indexes are then returned as an array of 
type "T".

If the "value" parameter is an object, the function uses the "Reflect.ownKeys" 
function to get an array of all the keys in the object. It then uses the 
"filter" function to filter out any keys that don't match the "isKey" parameter. 
The filtered keys are then returned as an array of type "T".

If the "value" parameter is neither an array nor an object, the function returns
 an empty array of type "T".

```

