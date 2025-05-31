---
title: Rainyun Cloud Server
icon: cloud-showers
---

Configure Rainyun Cloud Server.

## Obtain API Key
1. Go to [Rainyun Account Settings](https://app.rainyun.com/account/settings/api-key).
2. Record your account's **API Key** (will be used later).

![API Key](/assets/guide/config/server/rainyun-apitoken.webp)

## Obtain Server ID
1. Navigate to [Cloud Server List](https://app.rainyun.com/apps/rcs/list).
2. Find the **Server ID** in the target server's card information.

![Server ID](/assets/guide/config/server/rainyun-serverid.webp)

## Configure Firewall Rules
1. Click the server card title to access details.
2. Switch to the **Firewall** tab.
3. Record **Remark Names** for rules requiring Solo management.

::: important Rainyun Firewall Configuration
Special configuration required for Rainyun:
1. Create default rule: **Drop** all ports/protocols with **lowest priority**
2. Create allow rules for required ports with **higher priority**
3. Set **Remark Names** for allow rules
:::

As shown below, to protect `22` (SSH) and `3306` (MySQL) ports, configure `ssh` and `mysql` in Solo:

![Firewall Rules](/assets/guide/config/server/rainyun-firewallrules.webp)

::: tip Duplicate Remarks Allowed
Multiple rules can share the same remark. Solo will modify all matching rules.
:::

## Edit Configuration File
Add this configuration to Solo's TOML file:

```toml
[[servers]]
name = "Server Name"
machine_type = "rainyunrcs"     # Fixed for Rainyun
machine_id = "Server ID"        # From server card
secret_key = "API Key"          # Your API Key
protocol = "v4"                 # IPv4 only
rules = [
    "rule_remark1", # e.g. ssh
    "rule_remark2", # e.g. mysql
]
```

### Parameter Reference
* `name`: Custom server identifier
* `machine_type`: Must be `rainyunrcs`
* `machine_id`: Server **ID** from card
* `secret_key`: Your **API Key**
* `protocol`: Always `v4` (IPv4)
* `rules`: List of firewall **remark names**

## Complete Configuration Example
```toml
[[servers]]
name = "Rainyun Server"
machine_type = "rainyunrcs"
machine_id = "123456"
secret_key = "yHXydhIXRVMVk4qxliwBGE36jfhCZMmm"
protocol = "v4"
rules = [
    "ssh",
    "mysql",
]
```
