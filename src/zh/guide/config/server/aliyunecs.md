---
title: 阿里云云服务器
icon: a
---

配置阿里云云服务器。

## 申请 AccessKey
1. 访问 [阿里云控制台 RAM 访问密钥页面](https://ram.console.aliyun.com/profile/access-keys)。
2. 点击 **创建 AccessKey**。
3. 记录生成的 **AccessKey ID** 和 **AccessKey Secret**。

![AccessKey](/assets/guide/config/server/aliyun/accesskey.webp)

## 获取安全组 ID 和地域 ID
1. 进入 [阿里云云服务器控制台 / 安全组](https://ecs.console.aliyun.com/securityGroup/)。
2. 在页面中找到与你的云服务器绑定的安全组。
3. 复制下 **安全组 ID** (图中左方蓝字部分)

![安全组 ID](/assets/guide/config/server/aliyun/securitygroupid.webp)

4. 与此同时，查看浏览器地址栏中的 URL，从中获取 **地域 ID**。

举个例子，对于以下 URL，Region ID 为 `cn-hongkong`：

`https://ecs.console.aliyun.com/securityGroup/region/cn-hongkong`

## 配置防火墙规则
1. 在安全组详情页，在下方的 **访问规则** 中添加入方向的规则。
2. 为需要由 Solo 自动管理的端口规则设置 **专门的备注名称**（用于标识规则）。
3. 记录所有需要 Solo 管理的规则的备注名称。

::: info 关于安全组规则的填写
这是一个入方向的额安全组规则页面

![安全组规则](/assets/guide/config/server/aliyun/securitygrouprules.webp)

对于协议和访问目的，请正常填写。

在访问来源中，有 **IPv4** 和 **IPv6** 两种选择。

你可以选择任意一种，这取决于你通过哪种协议访问你的服务器，Solo 会根据防火墙规则的协议来决定应该将防火墙规则更新为 IPv4 还是 IPv6。

如果你喜欢，还可以同时创建两条规则，分别使用 IPv4 和 IPv6。
:::

::: tip 备注名称可重复
多条规则可使用相同备注名称。Solo 会自动识别并修改所有匹配该名称的规则。
:::

## 编辑配置文件
在 Solo 配置文件中添加以下内容：

```toml
[[servers]]
name = "服务器名称"
machine_type = "aliyunecs" 
machine_id = "安全组 ID"
region = "地域 ID"
secret_id = "AccessKey ID"
secret_key = "AccessKey Secret"
protocol = "both"
rules = [
    "规则备注1", # 如 ssh
    "规则备注2", # 如 mysql
]
```

### 参数说明
* `name`: 自定义服务器名称。
* `machine_type`: 服务器类型，固定为 `aliyunecs`。
* `machine_id`: **安全组 ID**。
* `region`: 安全组 **地域 ID**。
* `secret_id`: 申请的 **AccessKey ID**。
* `secret_key`: 申请的 **AccessKey Secret**。
* `protocol`: 防火墙协议版本，可填 `v4` (仅处理 IPv4 协议的规则) `v6` (仅处理 IPv6 协议的规则) 或 `both` (同时处理 IPv4 和 IPv6 协议的规则)。
* `rules`: 需要管理的安全组规则 **备注名称列表**。

## 完整配置文件示例
根据上述示例信息配置如下：

```toml
[[servers]]
name = "阿里云云服务器"
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
