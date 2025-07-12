---
title: Aliyun SWAS
icon: a
---

Configure Aliyun Simple Web Application Server (SWAS).

## Apply for AccessKey
1. Visit [Aliyun RAM AccessKey Management](https://ram.console.aliyun.com/profile/access-keys).
2. Click **Create AccessKey**.
3. Record the generated **AccessKey ID** and **AccessKey Secret**.

![AccessKey](/assets/guide/config/server/aliyun/accesskey.webp)

## Obtain Instance ID and Region ID
1. Go to [SWAS Management Console](https://swasnext.console.aliyun.com/servers).
2. Click the target server card title to access details page.
3. Find **Instance ID** in the **Basic Information** section.

![Instance ID](/assets/guide/config/server/aliyun/instanceid.webp)

4. At the same time, check the browser address bar URL to obtain **Region ID** (e.g. `cn-hongkong`).

For example, for the following URL, the Region ID is `cn-hongkong`:

`https://swasnext.console.aliyun.com/servers/cn-hongkong/314548fe211%20f4293aafc10c34e140026/dashboard`

## Configure Firewall Rules
1. In server details page, select **Firewall** from the menu.
2. Set **dedicated remark names** for port rules that need to be automatically managed by Solo (for rule identification).
3. Record all remark names for rules to be managed.

For example, to protect ports `22` (SSH) and `3306` (MySQL), configure `ssh` and `mysql`:

![Firewall Rules](/assets/guide/config/server/aliyun/firewallrules.webp)

::: tip Duplicate Remarks Allowed
Multiple rules can share the same remark. Solo will modify all matching rules.
:::

## Edit Configuration File
Add this configuration to Solo's TOML file:

```toml
[[servers]]
name = "Server Name"
machine_type = "aliyunswas"
machine_id = "Instance ID"
region = "Region ID"
secret_id = "AccessKey ID"
secret_key = "AccessKey Secret"
protocol = "v4"
rules = [
    "rule_remark1", # e.g. ssh
    "rule_remark2", # e.g. mysql
]
```

### Parameter Reference
* `name`: Custom server identifier
* `machine_type`: Must be `aliyunswas`
* `machine_id`: Server **Instance ID**
* `region`: Server **Region ID**
* `secret_id`: Your **AccessKey ID**
* `secret_key`: Your **AccessKey Secret**
* `protocol`: Firewall protocol version, fixed as `v4` (SWAS firewall only supports IPv4)
* `rules`: List of firewall **remark names**

## Configuration Example
Based on previous examples:

```toml
[[servers]]
name = "Aliyun SWAS"
machine_type = "aliyunswas"
machine_id = "314548fe211f4293aafc10C34e140026"
region = "cn-hongkong"
secret_id = "LTA15t9Bk3XGIWVYbDzKumin"
secret_key = "bOjlt4RbICjsdNp90s)(IOxjl)(Cqnnz"
protocol = "v4"
rules = [
    "ssh",
    "mysql",
]
```
