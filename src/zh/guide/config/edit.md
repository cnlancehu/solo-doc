---
title: 编辑
icon: pen-to-square

prev: ./new.md
---

在新建配置文件后，你会得到这样一个文件：

```toml
name = "配置文件名称"
schedule = "once"
notifications = []

[[servers]]
name = "服务器名称"
machine_type = "aliyunecs"
machine_id = "服务器实例ID"
region = "服务器地域"
secret_id = "密钥ID"
secret_key = "密钥Key"
protocol = "v4"
rules = [
    "第一条规则",
    "第二条规则",
]

[ip_provider]
embed = "ipecho"
```

## 初步编辑

在新建配置文件后，你需要首先对这几个字段进行编辑。

### `name`
首先，你需要编辑 `name` 字段，给配置文件起个名字。

这个名字会在 **通知**，或者 **同时执行多个配置文件** 时用到。

### `schedule`
`schedule` 字段用于设置配置文件的执行频率，你可以设置只运行一次，或者循环执行。

#### 单次运行
```toml
schedule = "once"
```

运行完成后程序将自动退出。

#### 重复运行
```toml
[schedule]
loop = 3600 # 每 3600 秒运行一次
```

注意，此处 `loop` 的单位是秒，意为每 xxx 秒运行一次。


设置重复执行后，程序将一直运行，直到你手动停止它。

### `ip_provider`
这里指定 Solo 获取公网 IP 的方式。

#### 内置 IP 获取接口
通过内置的 IP 获取接口获取公网 IP。

```toml
[ip_provider]
embed = "ipecho" # 使用 IpEcho 作为 IP 获取接口
```

目前可用的内置 IP 获取接口有：

| 别名           | 接口 URL                     |
| -------------- | ---------------------------- |
| `ipecho`       | https://ipecho.net/ip        |
| `curlmyip`     | https://curlmyip.net         |
| `myexternalip` | https://myexternalip.com/raw |

#### 自定义 IP 获取接口
通过自定义的接口获取公网 IP。

```toml
[ip_provider]
url = "https://api.lance.fun/ip" # 接口 URL
```

::: important 注意
自定义的 IP 获取接口需要返回**纯文本格式的 IP 地址**，不得含有其他内容。

另外，它必须同时支持 IPv4 和 IPv6。
:::
