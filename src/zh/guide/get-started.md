---
title: 快速上手
icon: play

prev: ./README.md
next: ./config/new.md
---

开始使用 Solo。

## 先决条件
首先，请确定 Solo 支持你的服务商。

目前，Solo 支持:

| 服务商 |          产品           |
| :----: | :---------------------: |
| 腾讯云 | 云服务器 轻量应用服务器 |  |
| 阿里云 | 云服务器 轻量应用服务器 |

::: important
Solo 仍处于早期开发阶段，支持的产品并不多。

如果您有其他产品的需求，能够为我们提供测试条件，

请通过 [提交 Issue](https://github.com/cnlancehu/solo/issues) 联系我们。
:::

## 下载
前往 [下载页面](../download/README.md) 下载适用于你的设备的版本

::: tip Solo 安卓
Solo 支持安卓设备，但是也仅处于最基本的支持

要注意的是，下载中的 Solo 安卓版本**不是安装包，它仍然是一个命令行程序**

想要在安卓上使用 Solo，你需要通过 adb 或者 root 等手段运行它

![使用 adb 运行 Solo](/assets/guide/adb.webp)

这挺麻烦的，只适合喜欢折腾安卓的人
:::

## 初次运行
把下载下来的压缩包解压，得到 Solo 程序，把它放到一个单独的文件夹中。

对 Solo 进行初次运行。
::: code-tabs#run

@tab Windows

```bash :no-line-numbers
solo
```

@tab Unix

```bash :no-line-numbers
chmod 755 solo # 赋予 Solo 执行权限
./solo
```
:::

![初次运行](/assets/guide/first-run.webp)

这条命令输出了 Solo 的帮助信息。

不难发现，Solo 在其目录下创建了一个名为 `conf` 的文件夹，这是存放配置文件的地方。
