---
title: 阿里云轻量
icon: a
---

配置阿里云轻量应用服务器。

## 申请 AccessKey
1. 访问 [阿里云控制台 RAM 访问密钥页面](https://ram.console.aliyun.com/profile/access-keys)。
2. 点击 **创建 AccessKey**。
3. 记录生成的 **AccessKey ID** 和 **AccessKey Secret**。

![AccessKey](/assets/guide/config/server/aliyun/accesskey.webp)

## 获取实例 ID 和地域 ID
1. 进入 [轻量应用服务器控制台](https://swasnext.console.aliyun.com/servers)。
2. 点击目标服务器卡片标题，进入详情页。
3. 在 **基本信息** 区域找到 **实例 ID**。

![实例 ID](/assets/guide/config/server/aliyun/instanceid.webp)

4. 与此同时，查看浏览器地址栏中的服务器概览页面 URL，从中获取 **地域 ID**（例如 `cn-hongkong`）。

举个例子，对于以下 URL，Region ID 为 `cn-hongkong`：

`https://swasnext.console.aliyun.com/servers/cn-hongkong/314548fe211%20f4293aafc10c34e140026/dashboard`

## 配置防火墙规则
1. 在服务器详情页，点击菜单中的 **防火墙**。
2. 为需要由 Solo 自动管理的端口规则设置 **专门的备注名称**（用于标识规则）。
3. 记录所有需要 Solo 管理的规则的备注名称。

例如，下图需要保护 `22` (SSH) 和 `3306` (MySQL) 端口，则后续配置应填写 `ssh` 和 `mysql`。

![防火墙规则](/assets/guide/config/server/aliyun/firewallrules.webp)

::: tip 备注名称可重复
多条规则可使用相同备注名称。Solo 会自动识别并修改所有匹配该名称的规则。
:::

## 编辑配置文件
在 Solo 配置文件中添加以下内容：

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
    "规则备注1", # 如 ssh
    "规则备注2", # 如 mysql
]
```

### 参数说明
* `name`: 自定义服务器名称（任意字符串）。
* `machine_type`: 服务器类型，固定为 `aliyunswas`。
* `machine_id`: 服务器 **实例 ID**。
* `region`: 服务器 **地域 ID**。
* `secret_id`: 申请的 **AccessKey ID**。
* `secret_key`: 申请的 **AccessKey Secret**。
* `protocol`: 防火墙协议版本，固定为 `v4` (轻量服务器防火墙仅支持 IPv4)。
* `rules`: 需要管理的防火墙规则 **备注名称列表**。

## 完整配置文件示例
根据上述示例信息配置如下：

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
