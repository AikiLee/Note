学习gnu的bash实现。同时也是历练英语的好方法：

[gun_base](https://www.gnu.org/software/bash/manual/bash.html)

## Shell

what is a shell? 
A: macro processer that execute commands
## Definitions

`POSIX`:A family of open system standards based on Unix. Bash is primarily concerned with the Shell and Utilities portion of the POSIX 1003.1 standard. which is like JSON in web dev, posix define data structure in system.

`blank`: Tab character

`whitespce`: space character. when use isspace() return true.

`builtin`: command belong to shell, like `echo, exec, type, cd, etc`

`token`: A sequence of characters considered a single unit by the shell. It is either a `word` or an `operator`.

`metacharacter`: A character that, when unquoted, separates words. A metacharacter is a `space`, `tab`, `newline`, or one of the following characters: ‘|’, ‘&’, ‘;’, ‘(’, ‘)’, ‘<’, or ‘>’.

`exit status`: The value returned by a command to its caller. The value is restricted to eight bits, so the maximum value is 255.

`control operator`: A `token` that performs a control function. It is a `newline` or one of the following: ‘||’, ‘&&’, ‘&’, ‘;’, ‘;;’, ‘;&’, ‘;;&’, ‘|’, ‘|&’, ‘(’, or ‘)’.

`job`: ==A set of processes comprising a pipeline==, and any processes descended from it, that are all in the same process group. 

`process group`: todo 

## Basic Shell Feature

- [Shell Syntax](https://www.gnu.org/software/bash/manual/bash.html#Shell-Syntax)
- [Shell Commands](https://www.gnu.org/software/bash/manual/bash.html#Shell-Commands)
- [Shell Functions](https://www.gnu.org/software/bash/manual/bash.html#Shell-Functions)
- [Shell Parameters](https://www.gnu.org/software/bash/manual/bash.html#Shell-Parameters)
- [Shell Expansions](https://www.gnu.org/software/bash/manual/bash.html#Shell-Expansions)
- [Redirections](https://www.gnu.org/software/bash/manual/bash.html#Redirections)
- [Executing Commands](https://www.gnu.org/software/bash/manual/bash.html#Executing-Commands)
- [Shell Scripts](https://www.gnu.org/software/bash/manual/bash.html#Shell-Scripts)

