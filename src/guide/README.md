---
title: Guide
icon: lightbulb

next: ./get-started.md
---

Solo, a lightweight port protection tool.

Solo should run on the device that needs to access the server ports (such as your personal computer). It automatically executes the following workflow:

1. Obtain the current public IP address

2. Check the cloud firewall rules status

3. Update the firewall rules' Cidr Block to your IP

This ensures that only your device can access the specified ports.

### Principle

By leveraging **the firewall feature provided by cloud service providers**, Solo protects ports by modifying the **Cidr Block** in firewall rules.

::: important Note
Solo only supports the firewall feature of cloud service providers, **not the firewall in the server's operating system**.
:::

::: info What is **Cidr**?
CIDR (Classless Inter-Domain Routing) is a method of representing IP ranges, commonly used in cloud server firewall rules.

For example, the format `1.1.1.1` means the firewall rule **only applies to the specific IP `1.1.1.1`**.
:::

So, if you dynamically update the **Cidr Block** of the firewall rule for a critical port to your own IP address,

you can effectively make that port accessible **only to yourself**.

### Let's Try It
You can manually modify the **Cidr Block** in your server's firewall to allow important ports only for your IP address.

Assume your IP is `8.8.8.8`, then the rule for allowing SSH (port 22) should look like this:

| Policy | Priority | Protocol | Port Range | Cidr Block (Source) | Description |
| ------ | -------- | -------- | ---------- | ------------------- | ----------- |
| Allow  | 1        | TCP      | 22/22      | 8.8.8.8             | ssh         |

As you can see, by setting the Cidr Block, access from other IPs to this port is effectively blocked.

> You can verify this by using **mobile data, proxy servers**, and other methods.

However, manually changing firewall rules each time is too much trouble.

What we need is a tool that automates the process of modifying the Cidr Block.

That’s how Solo came to be.

```component VPBanner
title: <i class="fa-regular fa-star-shooting"></i> Next<br>Start Using Solo
actions:
  - text: Get Started
    link: ./get-started.md
```
