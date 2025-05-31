---
title: 阿里云轻量
icon: a
---

配置阿里云轻量应用服务器。

## 申请访问密钥
首先，你需要在 [阿里云控制台](https://ram.console.aliyun.com/profile/access-keys) 申请一个访问密钥。

点击 **创建 AccessKey**，得到以下密钥。

![AccessKey](/assets/guide/config/server/aliyun-accesskey.webp)

记下其中的 **AccessKey ID** 和 **AccessKey Secret**，稍后需要用到。

## 获取实例 ID 、地域 ID
在 [轻量应用服务器控制台](https://swasnext.console.aliyun.com/servers) 中，点击服务器卡片的标题，进入服务器详情页。

在服务器概览中，你能在 **基本信息** 中找到服务器的 **实例 ID**。

![基本信息](/assets/guide/config/server/aliyun-instanceid.webp)

在服务器概览页面的网址中，你能找到服务器的**地域 ID**，如 `cn-hongkong`。
![地域 ID](/assets/guide/config/server/aliyun-regionid.webp)

## 配置防火墙规则
在服务器详情页的菜单中，点击 **防火墙**。

对于需要被 Solo 修改的防火墙规则，他们需要具备一个特定的备注，如下图中的 `ssh`，`mysql`。

稍后，你需要将这些备注名称添加到 Solo 的配置中，Solo 会根据备注名称来识别和修改相应的防火墙规则。

::: tip 多条规则可以拥有相同的备注名称
如果你有多条规则需要被 Solo 修改，可以为它们设置相同的备注名称。

Solo 会自动识别并修改所有匹配的规则。
:::

![防火墙规则](/assets/guide/config/server/aliyun-firewallrules.webp)

## 编辑配置文件
在 Solo 的配置文件中，添加以下内容：

```toml
[[servers]]
name = "服务器名称"
machine_type = "aliyunswas"
machine_id = "实例 ID"
region = "地域 ID"
secret_id = "AccessKey ID"
secret_key = "AccessKey Secret"
protocol = "v4"
rules = [
    "第一条规则的备注内容",
    "第二条规则的备注内容",
]
```

### `name`
服务器名称，任意字符串。

### `machine_type`
服务器类型，对于阿里云轻量，应填写 `aliyunswas`。

### `machine_id`
服务器实例 ID，填写 [上文](#获取实例-id-、地域-id) 中的 **实例 ID**。

### `region`
服务器地域 ID，填写 [上文](#获取实例-id-、地域-id) 中的 **地域 ID**。

### `secret_id`
阿里云访问密钥的 **AccessKey ID**，填写 [上文](#申请访问密钥) 中的 **AccessKey ID**。

### `secret_key`
阿里云访问密钥的 **AccessKey Secret**，填写 [上文](#申请访问密钥) 中的 **AccessKey Secret**。

### `protocol`
防火墙 CIDR 协议版本，对于防火墙仅支持 IPv4 的阿里云轻量，请填写 `v4`。

### `rules`
防火墙规则备注列表，填写 [上文](#配置防火墙规则) 中的需要被 Solo 修改的防火墙规则备注名称。

## 完整配置文件示例

以下是一个根据上文提供的示例信息填写的完整配置文件示例

```toml
[[servers]]
name = "阿里云轻量"
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