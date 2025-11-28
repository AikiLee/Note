对于python工程化的相关内容

## 1. 包管理

这里我们采用最主流的包管理工具uv，并附上两个学习网址，建议先看fastapi项目中写的，更适合快速了解工作原理：
- [fastapi虚拟环境](https://fastapi.tiangolo.com/zh/virtual-environments/#_18)
- [官方文档](https://docs.astral.sh/uv/#installation)

uv有几个核心功能：
- uv python  使用uv对python版本进行管理
- uv script  运行独立的的python脚本
- uv [project] 运行uv项目管理的相关命令
- uv tool [command] 运行/安装通过uv管理的包，这里通常是一些全局包例如代码格式化，所以使用black工具
- uv pip [command] 通过uv到pypi上下载项目依赖

现在我们对uv的基本功能已经有了比较清楚的了解，接下来就是核心的概念了
### 核心概念

- 