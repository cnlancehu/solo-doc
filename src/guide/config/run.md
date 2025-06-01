---
title: Run
icon: person-running
---

Run Solo configuration files.

After editing the configuration file following the steps above, you can run Solo.

## Place Configuration File
In the [Create Configuration File](./new.md) step, the directory where Solo creates the example configuration file is Solo's configuration file directory.

Solo will look for configuration files in that directory.

If you moved the configuration file while editing it, please put it back in the `conf` directory of the folder where the Solo program is located.

Then, run the following command to list available configuration files:

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

![List configuration files](/assets/guide/list.webp)

## Run Configuration File
After listing the configuration files, you can see the highlighted part in the output, such as `rainyun` in the image above.

This is the name of the configuration file.

Run the configuration file with the following command:
::: code-tabs#run

@tab Windows

```bash :no-line-numbers
solo go <configuration file name>

## For example
solo go rainyun
```

@tab Unix

```bash :no-line-numbers
./solo go <configuration file name>

## For example
./solo go rainyun
```
:::

![Run configuration file](/assets/guide/run.webp)

## Run Multiple Configuration Files <Badge text="Experimental Feature" type="warning" vertical="middle" />

Solo supports running multiple configuration files simultaneously.

Due to the complexity of output when running multiple configuration files simultaneously, Solo will only output the final running results of the configurations.

Run multiple configuration files with the following command:

::: code-tabs#run

@tab Windows

```bash :no-line-numbers
solo go <configuration file name1> <configuration file name2> ...

## For example
solo go rainyun aliyun
```

@tab Unix

```bash :no-line-numbers
./solo go <configuration file name1> <configuration file name2> ...

## For example
./solo go rainyun aliyun
```
:::
