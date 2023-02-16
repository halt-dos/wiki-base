---
sidebar_position: 3
---

# Geo Filtering
**Geo-filtering** is the practice of restricting access to Internet content, based upon the user's geographical location. With the help of Internet geolocation techniques, check user's IP address against a blacklist or whitelist, accounts, and measuring the end-to-end delay of a network connection to estimate the physical location of the user and restrict them.

Our solution restricts user's based upon Blacklisted IP Prefixes and Countries. It also allows permanently to access website through Whitelisted IP Prefixes.

---
![Geo Filtering](/img/adc/v2/geofiltering.png)

### How to Use:

1. Go to **Stack** > **SLB** > **Listener** > **Geo Filtering** 
2. Configure your settings.
3. Click **Save**.

**Configure the following parameters to set up the desired settings:**

| Parameters              | Accepted value       |  Type          |
|-------------------------|----------------------|----------------|
| Blacklisted Countries   | Drop Down            | Blank          |
| Whitelisted IP Prefixes | IP address with CIDR | Blank          |
| Blacklisted IP Prefixes | IP address with CIDR | Blank          |
| Bad Reputation Traffic  | Drop Down            | No Action      |
| BlackListed ASN         |   String             | Blank          |

### Description:

##### **Blacklisted Countries**

This section specifies the list of countries that will be permanently disallowed from accessing the website.

##### **Whitelisted IP Prefixes**

This section specifies the list of IPs that will be permanently allowed for accessing the website.

##### **Blacklisted IP Prefixes**

This section specifies the list of IPs that will be permanently disallowed from accessing the website.

##### **Bad Reputation Traffic**

Users can specifies the action to be performed on traffic from suspicious IPs.

##### BlackListed ASN 

User need to specific Specify the list of Autonomous System Numbers that will be permanently disallowed from accessing the website.
