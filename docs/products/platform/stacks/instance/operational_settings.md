---
sidebar_position: 1
---

# Operational Settings

To configure Haltdos appliance in various operational modes

---

## Overview

Haltdos platform supports multiple modes of operations of various Apps depending upon user requirement and deployment strategy. The appliance can be configured in the following modes:

- Layer 2 mode
    - Bridge
    - Transparent
- Layer 3 mode
    - Reverse Proxy
    - Direct Server Return
    - Out-of-Path mode with BGP Flowspec
- Offline mode
    - TAP / SPAN interface
    - Netflow / IPFIX / SFlow
    - Parsing access logs

![Operational setting](/img/platform/v2/operational_img.png)

### How to Use:
1. Users need to log into the Haltdos Web UI console.
2. Click on User icon on top right of the screen.
3. Go to **Instances> Operational**
2. Configure your settings
3. Click **Save Changes**

| Parameter                     | Accepted Value | Default Values  |
|-------------------------------|----------------|-----------------|
| Management IP                 | IP adress      | Blank           |
| Management Port               | Integer        | 9000            |
| SSL Engine                    | drop-down      | Software Engine |
| Operational Mode              | drop-down      | Inline mode     |
| CPU affinity                  | Integer        | Blank           |
| Huge pages                    | Integer        | Blank           |
| Public Certificate File       | File upload    | Blank           |
| Intermediate Certificate File | File upload    | Blank           |
| CA Bundle File                | File upload    | Blank           |
| Private Key File              | File upload    | Blank           |

### Description

##### **Management IP**
Users are allowed to configure instance management IP address.

##### **Management Port**
Users are allowed to configure instance management port.

##### **SSL Engine**
Users are allowed to specify the engine to be used for SSL Offloading. Requires reboot.

##### **Operational Mode**
Users are allowed to choose the instance mode of operation. Requires reboot.

##### **CPU Affinity**
Users are allowed to configure CPU affinity for optimization. Requires reboot.

##### **Huge Pages**
Users are allowed to configure Huge Pages for optimization. Requires reboot.

##### **Public Certificate File**
Users are allowed to upload public file.

##### **Intermediate Certificate File**
Users are allowed to upload intermediate file.

##### **CA Bundle File**
Users are allowed to upload CA bundle.

##### **Private Key File**
Users are allowed to upload private file.



