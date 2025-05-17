---
title: Create
icon: plus

prev: ../get-started.md
next: ./edit.md
---

Use the following command to create a new configuration file.
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

Solo will ask you to enter a configuration file name. Enter it correctly and press Enter <VPIcon
  icon="arrow-turn-down-left"
  verticalAlign="middle"
/> to continue.

::: important Please enter a valid filename
Filenames only support **numbers** and **letters**. Special characters will be ignored.

Solo will automatically append the `.toml` extension to the filename, so you don't need to add it manually.
:::

![Create new](/assets/guide/config-new.webp)
