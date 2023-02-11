---
sidebar_position: 1
---

# Settings
Configure Operational settings of Listeners.

### Overview

Users are allowed to configure many operational settings for the Listners.
  
![listner-setting](/img/ddos/v2/listner_setting.png)
  
### How to Use:
1. Go to **DDos** > **Listener** > **Settings**.  
2. Configure the settings.
3. Click on Save changes.  


| PARAMETERS                  | ACCEPTED VALUES | DEFAULT       |
|-----------------------------|-----------------|---------------|
| Enable IPv6|Enables IPv6 Accepted values: Boolean|True
| Enable HTTP 2.0 |Enables Http 2.0 Accepted values: Boolean|False
| Max Concurent Connection | Specify max allowed requests per keep-alive connection : Integer |1000
| Server Aliases| Listener Identity either domain name or IP address | NULL 
| VIRTUAL IPS|Specify assigned virtual IPs for accepting traffic. Accepted Values Integer|NULL
| Add Port|Helps you to add HTTP/S ports for Advance Settings.Accepted values: Integer|Blank

![port](/img/ddos/v2/port.png)

## Description

1.**Enable IPv6:**
This option allows user to enable traffic over IPv6 and applicable in the case of all service types. Internet Protocol version 6 is the most recent version of the Internet Protocol that allows communication to take place over the network.

2.**Enable HTTP 2.0:**
Specify if the WAF should allow HTTP 2.0 requests. By default, it supports other versions like HTTP 1.1
This option allows user to specify whether the solution supports HTTP 2.0 request. HTTP/2 aims to be a faster, more efficient protocol than HTTP. By default, it supports other versions like HTTP 1.1  

3.**Max Concurrent Connection:**
Specify max allowed concurrent connections. Set 0 to disable

4.**Server Aliases:**
This option specify aliases means familiar name for the listener.

5.**Virtual IPs:**
This option specify assigned virtual IPs for accepting traffic.

6.**Add Port:**
This option helps you to add HTTP/S ports for Advance Settings. Here you can unique port either HTTP  or HTTPS enabled configuration without changing backend server port.
