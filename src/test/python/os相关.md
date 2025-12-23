
## 1. os

### 常用方法


| 名称                              | 作用                 | 示例                                                    |
| ------------------------------- | ------------------ | ----------------------------------------------------- |
| os.getcwd()                     | 获取当前工作目录           |                                                       |
| os.chdir()                      | 切换目录               |                                                       |
| files_and_dirs = os.listdir()   | 列出当前路径下的目录         |                                                       |
| os.mkdir/redir("new_directory") | 创建和删除路径            |                                                       |
| remove/rename                   | 删除/重命名文件           |                                                       |
| os.system()                     | 执行系统命令             | os.system("ls -l")                                    |
| os.access(path,mode)            | 检测路径的权限            | ret = os.access("./", os.F_OK)检测当前目录是否存在              |
| os.chown()                      | 执行权限               | https://www.runoob.com/python3/python3-os-chmod.html  |
| os.fdopen(fd[, mode[, bufsize]) | 通过文件描述符创建并返回一个文件对象 | https://www.runoob.com/python3/python3-os-fdopen.html |
| os.open(path,mode)<br>          | 打开文件               | fd = os.open("f1.txt",os.O_RDWR)                      |
| os.read(fd,n)                   | 从文件描述符中读取n字节       |                                                       |
| os.close(fd)                    | 关闭文件               |                                                       |


## 2.sys

`sys` 是 Python 标准库中的一个模块，提供了与 Python 解释器及其环境交互的功能。

通过 `sys` 库，你可以访问与 Python 解释器相关的变量和函数，例如命令行参数、标准输入输出、程序退出等。

### 常用方法


| 名称                       | 作用          | 示例                                                                                                           |
| ------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------ |
| sys.argv                 | 获取命令行参数     | sys.argv[0] , sys.argv[1:]<br>python3 ./app/test.py arg1 aeg2<br>脚本名称：./app/test.py<br>参数列表：['arg1', 'aeg2'] |
| sys.exit(code)           | 退出程序        |                                                                                                              |
| sys.stdin/stdout/stderr  | 标准输入输出      |                                                                                                              |
| sys.path/sys.path.append | python模块路径  |                                                                                                              |
| sys.platform             | 平台          |                                                                                                              |
| sys.modules              | 已加载模块字段     |                                                                                                              |
| sys.version              | python解释器版本 |                                                                                                              |
| sys.executable           | 解释器绝对路径     |                                                                                                              |

## 3.subprocess

`subprocess` 是 Python 标准库中的一个模块，用于创建和管理子进程。
`subprocess` 允许你在 Python 程序中执行外部命令，并与这些命令进行交互。
通过 `subprocess` 模块，你可以执行系统命令、调用其他程序，并获取它们的输出或错误信息。

### 为什么使用 subprocess 模块？

在 Python 中，有时我们需要执行一些系统命令或调用其他程序来完成特定的任务。例如，你可能需要运行一个 shell 命令、启动一个外部应用程序，或者与一个命令行工具进行交互。`subprocess` 模块提供了一种安全且灵活的方式来处理这些需求。

与早期的 `os.system()` 或 `os.popen()` 相比，`subprocess` 模块提供了更强大的功能和更好的控制能力。它允许你更精细地管理子进程的输入、输出和错误流，并且可以处理更复杂的场景。

### 核心功能

1. 执行外部命令
	这里最常用的就是subprocess.run()直接执行命令
	```py
	# 基本用法 result = subprocess.run( 
	["git", "status"],
	capture_output=True, # 捕获输出 
	text=True, # 输出为文本而非字节 
	check=True, # 非零退出码时抛出异常 
	timeout=30) # 超时设置
	
	print("退出码:", result.returncode) 
	print("标准输出:", result.stdout) 
	print("错误输出:", result.stderr)
	"""
	args: _CMD, bufsize: int = -1, executable: StrOrBytesPath | None = None, stdin: _FILE = None, stdout: _FILE = None, stderr: _FILE = None, preexec_fn: (() -> Any) | None = None, close_fds: bool = True, shell: bool = False, cwd: StrOrBytesPath | None = None, env: _ENV | None = None, universal_newlines: bool | None = None, startupinfo: Any = None, creationflags: int = 0, restore_signals: bool = True, start_new_session: bool = False, pass_fds: Collection[int] = (), *, capture_output: bool = False, check: bool = False, encoding: str | None = None, errors: str | None = None, input: str | None = None, text: Literal[True], timeout: float | None = None, user: str | int | None = None, group: str | int | None = None, extra_groups: Iterable[str | int] | None = None, umask: int = -1, pipesize: int = -1, process_group: int | None = None
	
	1. 其中args建议输入命令列表或字符串（推荐使用列表避免 shell 注入）
	2. `stdin`：输入源（默认 None，可选 PIPE 或文件对象）
	3. `stdout/stderr`：输出目标（PIPE、文件对象或 DEVNULL）
	4. `cwd`：设置工作目录
	5. `env`：自定义环境变量
	6. `shell`：是否通过系统 shell 执行（默认为 False）   
	"""
	```

2. 处理输入输出和错误

3. 使用`subprocess.Popen`更加精细地控制子进程


4. 使用管道将多个命令串联

### 常见属性


### 常见方法