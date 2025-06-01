---
title: 运行
icon: person-running
---

运行 Solo 配置文件。

在按照上面的步骤编辑好配置文件后，就可以运行 Solo 了。

## 放置配置文件
在 [创建配置文件](./new.md) 的步骤中，Solo 所创建的示例配置文件所在的目录就是 Solo 的配置文件目录。

Solo 会在该目录下寻找配置文件。

如果你编辑配置文件时挪动了它的位置，请将它放回 Solo 程序所在文件夹的的 `conf` 目录下。

然后，运行以下命令列出可用的配置文件：

::: code-tabs#run

@tab Windows

```bash :no-line-numbers
solo conf list
```

@tab Unix

```bash :no-line-numbers
./solo conf list
```
:::

![列出配置文件](/assets/guide/list.webp)

## 运行配置文件
在列出配置文件后，你能看到输出内容的标黄部分，例如上图中的 `rainyun`。

它即为配置文件的名称。

通过以下命令运行配置文件：
::: code-tabs#run

@tab Windows

```bash :no-line-numbers
solo go <配置文件名称>

## 例如
solo go rainyun
```

@tab Unix

```bash :no-line-numbers
./solo go <配置文件名称>

## 例如
./solo go rainyun
```
:::

![运行配置文件](/assets/guide/run.webp)

## 运行多个配置文件 <Badge text="实验性功能" type="warning" vertical="middle" />

Solo 支持同时运行多个配置文件。

由于配置文件同时运行的输出内容复杂，因此 Solo 只会输出配置的最终运行结果。

通过以下命令运行多个配置文件：

::: code-tabs#run

@tab Windows

```bash :no-line-numbers
solo go <配置文件名称1> <配置文件名称2> ...

## 例如
solo go rainyun aliyun
```

@tab Unix

```bash :no-line-numbers
./solo go <配置文件名称1> <配置文件名称2> ...

## 例如
./solo go rainyun aliyun
```
:::
