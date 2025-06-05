---
title: Get Started
icon: play

prev: ./README.md
next: ./config/new.md
---

Start using Solo.

## Prerequisites
First, make sure that Solo supports your cloud provider.

Currently, Solo supports:

|   Provider    |                      Products                      |
| :-----------: | :------------------------------------------------: |
| Tencent Cloud |         Cloud Virtual Machine, Lighthouse          |
|    Aliyun     | Elastic Compute Service, Simple Application Server |
|    Rainyun    |                    Cloud Server                    |

::: important
Solo is still in early development and currently supports only a limited number of products.

If you need support for other products and can provide a testing environment,

please contact us by [submitting an Issue](https://github.com/cnlancehu/solo/issues).
:::

## Download
Go to the [download page](../download/README.md) to get the version suitable for your device.

::: tip Solo for Android
Solo supports Android devices, but only at a very basic level.

Note that the Android version of Solo available for download **is not an apk — it's still a command-line program**.

To use Solo on Android, you'll need to run it using adb or root.

![Running Solo with adb](/assets/guide/adb.webp)

This is quite troublesome and is only for people who like to tinker with Android.
:::

## First Run
Extract the downloaded archive to get the Solo program, and place it in a separate folder.

Run Solo for the first time:
::: code-tabs#run

@tab Windows

```bash :no-line-numbers
solo
```

@tab Unix

```bash :no-line-numbers
chmod 755 solo # Grant execute permission to Solo
./solo
```
:::

![First Run](/assets/guide/first-run.webp)

This command outputs Solo's help information.

You'll notice that Solo creates a folder named `conf` in its directory—this is where configuration files are stored.
