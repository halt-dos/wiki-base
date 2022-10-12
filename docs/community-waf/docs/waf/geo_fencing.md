---
sidebar_position: 2
---

# Geo Fencing
   
### Overview
Geo Fencing is a smart way to limit access to Internet content as per the geographic location of the user. Firstly, we determine the location of the user using the Geo location techniques (such as reviewing the IP address of the user against Whitelist or blacklist, accounts, calculating network connection end-to-end delay to assess the user's physical location). Lastly, result analysis takes place to determine whether the system will allow or deny access to the site or particular content. Geo -location also aids in content modification.

![Geo Fencing](/img/community-waf/geo_filtering.png)

### How to Use
1. Log onto the Haltdos console then go to **WAF** > **Geo Fencing** 
2. Configure the settings.
3. Click on save.

| Parameters              | Accepted value |  Default |
|-------------------------|----------------|----------|
| Blacklist Countries     | Drop-down      | Blank    |
| Whitelist IP Prefixes   | IP             | Blank    |
| Blacklisted IP Prefixes | IP             | Blank    |

### Description

#### Blacklisted Countries

To block requests based on country of origin. It enables the request to be filtered based on the countries specified. Countries can be selected by typing the name of the country and any request coming from the specified countries will be dropped.
   
#### Whitelisted IP Prefixes
IP whitelisting is when you grant network access only to specific IP addresses. This field allows the request coming from specified IP Prefixes permanently though the country is blacklisted or any other restriction.
   
#### Blacklisted IP Prefixes
IP blacklisting is a method used to filter out illegitimate or malicious IP addresses from accessing your networks. Blacklists are lists containing ranges of or individual IP addresses that you want to block. This field restricts the requests coming from specified IP Prefixes permanently. 

