---
title: Aliyun ECS
icon: a
---

Configure Aliyun Elastic Compute Service (ECS).

## Apply for AccessKey
1. Visit [Aliyun RAM AccessKey Management](https://ram.console.aliyun.com/profile/access-keys).
2. Click **Create AccessKey**.
3. Copy the generated **AccessKey ID** and **AccessKey Secret**.

![AccessKey](/assets/guide/config/server/aliyun/accesskey.webp)

## Obtain Security Group ID and Region ID
1. Go to [Aliyun ECS Console / Security Groups](https://ecs.console.aliyun.com/securityGroup/).
2. Find the security group bound to your cloud server on the page.
3. Copy the **Security Group ID** (the blue text on the left in the image).

![Security Group ID](/assets/guide/config/server/aliyun/securitygroupid.webp)

4. At the same time, check the URL in your browser's address bar to get the **Region ID**.

For example, for the following URL, the Region ID is `cn-hongkong`:

`https://ecs.console.aliyun.com/securityGroup/region/cn-hongkong`

## Configure Firewall Rules
1. In the security group details page, add inbound rules in the **Access Rules** section below.
2. Set **specific comment names** for port rules that need to be automatically managed by Solo (for rule identification).
3. Record the comment names of all rules that need to be managed by Solo.

::: info About Security Group Rule Configuration
This is an inbound security group rule page

![Security Group Rules](/assets/guide/config/server/aliyun/securitygrouprules.webp)

For protocol and access destination, please fill in normally.

In the access source, there are **IPv4** and **IPv6** options.

You can choose either one, depending on which protocol you use to access your server. Solo will decide whether to update the firewall rules to IPv4 or IPv6 based on the protocol of the firewall rules.

If you prefer, you can also create two rules simultaneously, using IPv4 and IPv6 respectively.
:::

::: tip Comment Names Can Be Repeated
Multiple rules can use the same comment name. Solo will automatically identify and modify all rules matching that name.
:::

## Edit Configuration File
Add this configuration to Solo's TOML file:

```toml
[[servers]]
name = "Server Name"
machine_type = "aliyunecs" 
machine_id = "Security Group ID"
region = "Security Group Region ID"
secret_id = "AccessKey ID"
secret_key = "AccessKey Secret"
protocol = "both"
rules = [
    "rule_remark1", # e.g. ssh
    "rule_remark2", # e.g. mysql
]
```

### Parameter Description
* `name`: Custom server name.
* `machine_type`: Server type, fixed as `aliyunecs`.
* `machine_id`: **Security Group ID**.
* `region`: Security group **Region ID**.
* `secret_id`: Applied **AccessKey ID**.
* `secret_key`: Applied **AccessKey Secret**.
* `protocol`: Firewall protocol version, can be `v4` (only process IPv4 protocol rules), `v6` (only process IPv6 protocol rules), or `both` (process both IPv4 and IPv6 protocol rules).
* `rules`: List of security group rule **comment names** that need to be managed.

## Complete Configuration File Example
Based on the above example information, configure as follows:

```toml
[[servers]]
name = "Aliyun ECS"
machine_type = "aliyunecs"
machine_id = "sg-j6c7mt54eo48a2070jc8"
region = "cn-hongkong"
secret_id = "LTA15t9Bk3XGIWVYbDzKumin"
secret_key = "bOjlt4RbICjsdNp90s)(IOxjl)(Cqnnz"
protocol = "both"
rules = [
    "ssh",
    "mysql",
]
```
