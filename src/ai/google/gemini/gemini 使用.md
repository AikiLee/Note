## 1. 获取gemini pro学生优惠

主要分三步：

- 准备一个google账号,然后进入页面：[google one页面](https://one.google.com/ai-student?g1_landing_page=75)
- 使用telegram机器人通过学生信息认证
- 准备一张(虚拟)美国信用卡，预存2美元即可

### 主要讲一下第二步

在telegram需要关注机器人账号：@sheeridver_bot , 然后添加机器人

先/checkin看是否有足够的钱
使用/verify，再传如google one的表单页面，正常情况下一段时间之后就可以通过验证
通过验证之后就填写信用卡信息就行了

## 2.gemini cli

使用gemini cli，直接可以集成在vscode的terminal中使用，就不用切来切去了，配合插件gemini cli companion可以快速访问

这东西说起来也比较容易用,[官方文档](https://geminicli.com/docs/)

但是踩了一些坑，主要是权限的问题（默认使用美国代理），需要我们开启权限：
- 需要在google cloud创建一个项目，用于保存gemini cli的身份验证
- 在bashrc/zshrc中配置环境变量和代理信息，确保可以正常验证，同时代理一般仅代理本地发送的请求，google返回的信息无法被正常代理，所以需要开启tun模式
	`export https_proxy="127.0.0.1:7890"
	export GOOGLE_CLOUD_PROJECT_ID="gen-lang-client-0720073421"`
- iam相关：[开启iam中gemini for google cloud 相关](https://console.cloud.google.com/projectselector2/iam-admin/iam?hl=zh-cn)
- api相关：[gemini for google cloud](https://console.cloud.google.com/apis/library/browse?project=gen-lang-client-0720073421&q=gemini)

[参考文章](https://www.xmsumi.com/detail/1144)
## 3. antigravity

https://kerrynotes.com/google-antigravity-cannot-log-in/

卡在登录这一步，不是常规报错，后续再看吧