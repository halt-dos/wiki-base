---
sidebar_position: 1
---

# SNMP

---

## Overview

Simple Network Management Protocol (SNMP) is an application–layer protocol defined by the Internet Architecture Board (IAB) in RFC1157 for exchanging management information between network devices. It is a part of Transmission Control Protocol⁄Internet Protocol (TCP⁄IP) protocol suite.

#### How SNMP works

SNMP on haltdos devices communicate with a network management system to relay status information and configuration changes. The NMS provides a single interface from which administrators can issue batch commands and receive automatic alerts.

SNMP relies on the concept of an MIB to organize how information about device metrics gets exchanged. The MIB is a formal description of a network device's components and status information.

SNMP uses a blend of pull and push communications between network devices and the network management system. Haltdos devices that communicate through SNMP respond to it by delivering protocol data units, commonly known as SNMP GET requests. All of these communications are recorded, and network monitoring software uses them to obtain SNMP data. Network admins can track the data value they specify using these queries.

![snmp](/img/platform/v2/snmp.png)

### How to Use:

1. Go to **Stack > Instances > (Select Instance) > Network > SNMP**
2. Configure your settings.
3. Click on **Save changes**.

| SETTINGS              | ACCEPTED VALUES | DEFAULT              |
|-----------------------|-----------------|----------------------|
| SNMP  Name      | String          | Blank                |
| System Description          | String       | Blank               |
| System Location         | String       | Blank               |
| System Contact          | String       | Blank               |
| Layer4 Protocol         | Drop Down       | Blank               |
| Agent Port             | Integer         | 161                  |
| Agent Address            | Integer         | Blank                |
| Enable Traps      | Boolean         | False                |
| Trap Username / Community             | Drop Down       | Link Detection       |
| Manager Address       | Integer         | Blank                |
| Manager Port          | Integer         | 162                  |

#### Description

**SNMP Name** 

User can specify the SNMP client name.

**System Description** 

User can describe about the SNMP Machine

**System Location**

User can enter the location of the Machine.

**System Contact**

User can specify contact information for the machine

**Layer4 Protocol**

Users can select underlying protocol for SNMP Communication

**Agent Port**

User can select SNMP agent port number for SNMP communication

**Agent Address**

User select SNMP agent IP addresses for SNMP communication

**Enable Traps**

Users can enable or disable SNMP traps

**Trap Username / Community**

User can select the username / community to use when sending traps

**Manager Address**

Users can enter SNMP monitor IP address.

**Manager Port**

Users can enter SNMP monitor port address.








