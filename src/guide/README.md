---
title: Guide
icon: lightbulb

next: ./get-started.md
---

## Introduction
Solo is a lightweight port protection tool.

### Principle

By leveraging **the firewall feature provided by cloud service providers**, Solo protects ports by modifying the **Cidr Block** in firewall rules.

::: important Note
Solo only supports the firewall feature of cloud service providers, **not the firewall in the server's operating system**.
:::

::: info What is **Cidr**?
CIDR (Classless Inter-Domain Routing) is a method of representing IP ranges, commonly used in cloud server firewall rules.

For example, the format `1.1.1.1` means the firewall rule **only applies to this specific IP**.
:::

So, if you dynamically update the **Cidr Block** of the firewall rule for a critical port to your own IP address,

you can effectively make that port accessible **only to yourself**.

### Let's Try It
On your server’s firewall, modify the **Cidr Block** of the rule that allows access to critical ports to your own IP address.

Assume your IP is `8.8.8.8`, then the rule for allowing SSH (port 22) should look like this:

| Policy | Priority | Protocol | Port Range | Cidr Block (Source) | Description |
| ------ | -------- | -------- | ---------- | ------------------- | ----------- |
| Allow  | 1        | TCP      | 22/22      | 8.8.8.8             | ssh         |

As you can see, by setting the Cidr Block, access from other IPs to this port is effectively blocked.

> You can verify this by using **mobile data, proxy servers**, and other methods.

However, manually changing firewall rules each time is too much trouble.

What we need is a tool that automates the process of modifying the Cidr Block.

That’s how Solo came to be.

### How It Works

Solo's port protection process mainly includes the following steps:

1. **Retrieve Firewall Rules**  
   Use the cloud provider’s API to fetch the current list of firewall rules for your server.

2. **Filter and Detect**  
   Determine which rules should be managed by Solo based on their comments, and detect if the local IP has changed.

3. **Automatically Update Rules**  
   If an IP change is detected, Solo automatically uses the cloud provider's API to update the Cidr Block of the relevant rules in real time.

```component VPBanner
title: <i class="fa-regular fa-star-shooting"></i> Next<br>Start Using Solo
actions:
  - text: Get Started
    link: ./get-started.md
```
