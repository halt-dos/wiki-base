---
sidebar position: 4
---

# Session Table

## Overview

The session table records the connection status of on boarded listeners. It plays an important role  to understand the traffic flow and to identify which request has forwarded to which upstream.

![session_table](/img/waf/v2/sessiontable.png)

### How to use it

1. Go to **Apps** > **WAF** > **Session Table**

### Description

##### **TIMESTAMP**

In the time stamp column user can get details about the connection intialization time for that particular session, for each session time session can be different.

##### **SOURCE**

In source column user can get details about the client source ip from which the request has been generated.

##### **PROXY**
In proxy column the user can see the ip address that has been NAT for the client request. As the waf is working as a reverse proxy, hence requests forwarded to backend sever should be NAT with waf ip addresss.

##### **CLIENT NAT**

If user has configured client ip pool and server groups then requests forwarded to backend sever will be NAT with cllient ip pool address.
 

##### **UPSTREAM**

In upstream column user can see the ip of backend server. 