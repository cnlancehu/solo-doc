---
title: Aliyun SWAS
icon: a
---

Configure Aliyun SWAS.

## Apply for Access Key
First, you need to apply for an access key in the [Aliyun Cloud Console](https://ram.console.aliyun.com/profile/access-keys).

Click **创建 AccessKey** to get the following key.

![AccessKey](/assets/guide/config/server/aliyun-accesskey.webp)

Note down the **AccessKey ID** and **AccessKey Secret**, which will be needed later.

## Get Instance ID and Region ID
In the [Simple Application Server Console](https://swasnext.console.aliyun.com/servers), click on the server card title to enter the server details page.

In the server overview, you can find the server's **Instance ID** in the **基本信息** section.

![基本信息](/assets/guide/config/server/aliyun-instanceid.webp)

In the URL of the server overview page, you can find the server's **Region ID**, such as `cn-hongkong`.
![地域 ID](/assets/guide/config/server/aliyun-regionid.webp)

## Configure Firewall Rules
In the server details page menu, click **防火墙**.

For firewall rules that need to be modified by Solo, they need to have a specific remark, such as `ssh` and `mysql` shown in the image below.

Later, you need to add these remark names to Solo's configuration. Solo will identify and modify the corresponding firewall rules based on the remark names.

::: tip Multiple rules can have the same remark name
If you have multiple rules that need to be modified by Solo, you can set the same remark name for them.

Solo will automatically identify and modify all matching rules.
:::

![防火墙规则](/assets/guide/config/server/aliyun-firewallrules.webp)

## Edit Configuration File
In Solo's configuration file, add the following content:

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
    "First rule remark",
    "Second rule remark",
]
```

### `name`
Server name, any string.

### `machine_type`
Server type, for Aliyun SWAS, fill in `aliyunswas`.

### `machine_id`
Server instance ID, fill in the **Instance ID** from [above](#get-instance-id-and-region-id).

### `region`
Server region ID, fill in the **Region ID** from [above](#get-instance-id-and-region-id).

### `secret_id`
Aliyun access key's **AccessKey ID**, fill in the **AccessKey ID** from [above](#apply-for-access-key).

### `secret_key`
Aliyun access key's **AccessKey Secret**, fill in the **AccessKey Secret** from [above](#apply-for-access-key).

### `protocol`
Firewall CIDR protocol version, for Aliyun SWAS that only supports IPv4 firewall, fill in `v4`.

### `rules`
Firewall rule remark list, fill in the remark names of firewall rules that need to be modified by Solo from [above](#configure-firewall-rules).

## Complete Configuration File Example

The following is a complete configuration file example filled in according to the sample information provided above:

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