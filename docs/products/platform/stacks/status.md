---
sidebar_position: 2
---

# Status  

Overview of Status of resources allocated to a stack.

---

All stacks have one or more instances associated with them. Each instance may be configured with one or more NIC cards sending and receiving traffic over them.

While every stack user can see the status of all resources associated with the stack, the system administrator should be able to view status across stacks (specially if multi-tenancy or vADC feature is enabled).

This status page shows the details of all instances, their health, the status of various services running in it as well as the status of traffic flowing through various NIC ports.

A sample instance status is shown below:

![status_page](/img/platform/v2/status_newui_01.png)

![status_page](/img/platform/v2/status_newui.png)

### How to Use:
1. User need to login on Haltdos web UI console, click on right top corner user icon and select systems.
2. Now select status option.


### Description

##### **Summary**
This feature allows user to get overall health status and summary details. This page shows details such as Health status, HA status, last backup status & last status update time.

##### **Measurement**

This option allows users to get hardware usage status. It includes status of CPU, Memory and disk space.

##### **Service Status**
This option allows users to get service status details and uptime details.
