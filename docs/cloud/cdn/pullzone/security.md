---
sidebar_position: 3
---

# Security

Configure Edge Security (IP Addresses, Legitimate/Malicious Referrers, and Countries) for CDN.

---

**Overview**

This section describes three main actions:

1. How to set up hotlinking protection.

2. How to protect your site content from getting stole.

3. How to stop other websites from increasing your bandwidth bills.

**How to Use**

The process is quite easy. You simply have to create a list of allowed referrers. Steps included:

1. Go to **CDN > Pullzones > Security**.

2. Configure your settings.

3. Click on Save.

**Configure the following parameters to set up the desired settings:**

| PARAMETERS           | ACCEPTED VALUES | DEFAULT |
|----------------------|-----------------|---------|
| Blocked Referrers    | Hostnames       | None    |
| Allowed Referrers    | Hostnames       | None    |
| Blocked IP Addresses | IP Addresses    | None    |
| Blocked Countries    | Country Name    | None    |

**Blocked Referrers**

Specify a list of hostnames that will be blocked from accessing the pull zone.

Note: Use Allowed Referrers only for full hotlinking protection

**Allowed Referrers**

Specify a list of hostnames that will be allowed to access the pull zone content. If no hostname is, all requests will be allowed.

**Blocked IP Addresses**

Specify a list of IPs that will be blocked from accessing the pull zone.

**Blocked Countries**

Specify a list of countries whose traffic will be rejected on the DNS level and will not reach our servers at all.