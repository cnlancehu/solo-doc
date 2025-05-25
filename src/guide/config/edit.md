---
title: Edit
icon: pen-to-square

prev: ./new.md
---

Edit Solo configuration file.

After creating a new configuration file, you will get a file like this:

```toml
name = "Configuration File Name"
schedule = "once"
notifications = []

[[servers]]
name = "Server Name"
machine_type = "aliyunecs"
machine_id = "Server Instance ID"
region = "Server Region"
secret_id = "Secret ID"
secret_key = "Secret Key"
protocol = "v4"
rules = [
    "First Rule",
    "Second Rule",
]

[ip_provider]
embed = "ipecho"
```

## Initial Editing

After creating a new configuration file, you need to first edit these fields.

### `name`
First, you need to edit the `name` field to give a name to your configuration file.

This name will be used in **notifications** or when **executing multiple configuration files simultaneously**.

### `schedule`
The `schedule` field is used to set the execution frequency of the configuration file. You can set it to run once or in a loop.

#### Run Once
```toml
schedule = "once"
```

The program will exit automatically after completion.

#### Repeated Execution
```toml
[schedule]
loop = 3600 # Run once every 3600 seconds
```

Note that the unit of `loop` is seconds, meaning run once every xxx seconds.

When set to repeat execution, the program will continue running until you manually stop it.

### `ip_provider`
This specifies how Solo obtains the public IP address.

#### Built-in IP Retrieval Interfaces
Get public IP through built-in IP retrieval interfaces.

```toml
[ip_provider]
embed = "ipecho" # Use IpEcho as the IP retrieval interface
```

Currently available built-in IP retrieval interfaces:

| Alias          | Interface URL                |
| -------------- | ---------------------------- |
| `ipecho`       | https://ipecho.net/ip        |
| `curlmyip`     | https://curlmyip.net         |
| `myexternalip` | https://myexternalip.com/raw |

#### Custom IP Retrieval Interface
Get public IP through a custom interface.

```toml
[ip_provider]
url = "https://api.lance.fun/ip" # Interface URL
```

::: important Note
The custom IP retrieval interface must return an **IP address in plain text format** without any additional content.

Additionally, it must support both IPv4 and IPv6.
:::
