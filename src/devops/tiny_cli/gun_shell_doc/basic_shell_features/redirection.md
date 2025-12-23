## Origin Text

Before a command is executed, its input and output may be _redirected_ using a special notation interpreted by the shell. _Redirection_ allows commands’ file handles to be duplicated, opened, closed, made to refer to different files, and can change the files the command reads from and writes to. When used with the `exec` builtin, redirections modify file handles in the current shell execution environment. The following redirection operators may precede or appear anywhere within a simple command or may follow a command. Redirections are processed in the order they appear, from left to right.

Each redirection that may be preceded by a file descriptor number may instead be preceded by a word of the form {varname}. In this case, for each redirection operator except `>&-` and `<&-`, the shell allocates a file descriptor greater than or equal to 10 and assigns it to {varname}. If {varname} precedes `>&-` or `<&-`, the value of varname defines the file descriptor to close. If {varname} is supplied, the redirection persists beyond the scope of the command, which allows the shell programmer to manage the file descriptor’s lifetime manually without using the `exec` builtin. The `varredir_close` shell option manages this behavior (see [The Shopt Builtin](https://www.gnu.org/software/bash/manual/bash.html#The-Shopt-Builtin)).

In the following descriptions, if the file descriptor number is [^1]omitted, and the first character of the redirection operator is ‘<’, the redirection refers to the standard input (file descriptor 0). If the first character of the redirection operator is ‘>’, the redirection refers to the standard output (file descriptor 1).

The word following the redirection operator in the following descriptions, unless otherwise noted, is subjected to [^2]brace expansion, [^3]tilde expansion, parameter and variable expansion, command [^4]substitution, [^5]arithmetic expansion, quote removal, filename expansion, and word splitting. If it expands to more than one word, Bash reports an error.

The order of redirections is significant. For example, the command

## file operator

在linux/unix中，每个文件默认启动时会打开三个默认操作符：

- 0：标准输入，stdin
- 1：标准输出，stdout
- 2：标准错误，stderr


[^1]: adj. 被省略的，被忽略的
	omit v. 省略，忽略，未做

[^2]: n.大括号
	v. 使紧绷，支撑，加固

[^3]: n. 波浪号

[^4]: n. 替换
	substitute v. 替换

[^5]: adj. 算数的，运算的
