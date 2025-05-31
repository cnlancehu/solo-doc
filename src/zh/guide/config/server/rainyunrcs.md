---
title: 雨云云服务器
icon: cloud-showers
---

配置雨云云服务器。

## 获取 API 密钥
1. 前往 [雨云账户设置](https://app.rainyun.com/account/settings/api-key) 页面。
2. 记录账户的 **API 密钥**（稍后需要用到）。

![API 密钥](/assets/guide/config/server/rainyun-apitoken.webp)

## 获取服务器 ID
1. 进入 [云服务器列表](https://app.rainyun.com/apps/rcs/list)。
2. 在目标服务器的卡片信息中找到 **服务器 ID**。

![服务器 ID](/assets/guide/config/server/rainyun-serverid.webp)

## 配置防火墙规则
1. 点击目标服务器卡片标题进入详情页。
2. 切换到 **防火墙** 标签页。
3. 记录需要由 Solo 管理的端口规则的 **备注名称**。

::: important 雨云防火墙规则配置
特别地，雨云云服务器的防火墙规则需要按照以下步骤配置：
1. 创建默认规则：**丢弃** 所有端口/协议，设置为 **最低优先级**，以默认阻止未放行的流量。
2. 创建放行规则：为需要开放的端口设置为 **高优先级**
3. 为放行规则设置 **备注名称**
:::

如下图，若需要保护 `22` (SSH) 和 `3306` (MySQL) 端口，则 Solo 配置中应填写 `ssh` 和 `mysql`：

![防火墙规则](/assets/guide/config/server/rainyun-firewallrules.webp)

::: tip 备注名称可重复使用
多条规则可使用相同备注名称。Solo 会自动修改所有匹配的规则。
:::

## 编辑配置文件
在 Solo 配置文件中添加以下内容：

```toml
[[servers]]
name = "服务器名称"
machine_type = "rainyunrcs"     # 雨云固定值
machine_id = "服务器 ID"         # 从卡片获取
secret_key = "API 密钥"          # 账户API密钥
protocol = "v4"                 # 雨云仅支持IPv4
rules = [
    "规则备注1", # 如 ssh
    "规则备注2", # 如 mysql
]
```

### 参数说明
* `name`: 自定义服务器标识
* `machine_type`: 必须为 `rainyunrcs`
* `machine_id`: 服务器的 **ID**（从卡片获取）
* `secret_key`: 账户的 **API 密钥**
* `protocol`: 固定为 `v4` (IPv4)
* `rules`: 防火墙 **备注名称** 列表

## 完整配置示例
```toml
[[servers]]
name = "雨云服务器"
machine_type = "rainyunrcs"
machine_id = "123456"
secret_key = "yHXydhIXRVMVk4qxliwBGE36jfhCZMmm"
protocol = "v4"
rules = [
    "ssh",
    "mysql",
]
```
