---
title: 新建
icon: plus

prev: ../get-started.md
next: ./edit.md
---

新建一个 Solo 配置文件。

::: code-tabs#run

@tab Windows

```bash
solo conf new
```

@tab Unix

```bash
./solo conf new
```
:::

Solo 会要求你输入配置文件的文件名，正确输入后按下 Enter <VPIcon
  icon="arrow-turn-down-left"
  verticalAlign="middle"
/> 即可。

::: important 请输入正确的文件名
文件名仅支持 **数字** 和 **字母**，输入特殊字符时会被忽略。

Solo 会自动在文件名后追加 `.toml` 后缀，无需手动添加。
:::

![新建](/assets/guide/config-new.webp)
