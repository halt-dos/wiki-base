---
sidebar_position: 2
---

# Geo Filtering

---

### Overview

Geo Filtering is an ability to filter out request coming from different geographical locations and taking actions to block the Country & IP address if required. In the Geo-filtering settings, we can configure Blacklisted Countries, Blacklisted IP Prefixes, and Whitelisted IP Prefixes.

![geo_filtering](/img/ddos/v2/geo_filtering.png)

### How to Use

1. Go to **Apps > DDoS > Geo Filtering**

2. Configure the settings as per requirement.

3. Click on **Save Changes**.

| Settings                | Accepted Values      | Default   |
|-------------------------|----------------------|-----------|
| Blacklisted Countries   | Countries            | Drop Down |
| Blacklisted IP Prefixes | IP Address with CIDR | Blank     |
| Whitelisted IP Prefixes | IP Address with CIDR | Blank     |

### Description

#### **Blacklisted Countries**

Select the list of countries from the drop-down list that will be permanently disallowed.

#### **Blacklisted IP Prefixes**

Specify multiple IP prefixes that will be permanently disallowed.

#### **Whitelisted IP Prefixes**

Specify multiple IP prefixes. Traffic to / from these IPs will permanently bypass all configured mitigations.