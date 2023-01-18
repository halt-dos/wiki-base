---
sidebar_position: 5
---

# Policy Routing

Policy Based Routing & Settings

---

Policy-based routing (PBR) is a technique that forwards and routes data packets based on policies or filters. User can selectively apply policies based on specific parameters such as source and destination IP address, source or destination port, protocols or other criteria and then route the packets on user-defined routes.

Policy-based routing  provides flexible, granular traffic-handling capabilities for forwarding packets. In this way, PBR enables users to achieve optimal bandwidth utilization for business-critical applications.

![policy_routing](/img/llb/v2/policyroute.png)

### **How to Use:**

1. Go to **Stack > LLB > Rules**.

2. Select Policy Route NAT rule.

3. Click Add Rule button.

4. Configure your settings.

5. Click Save.


| Setting                | Accepted Values                | Default            |
|------------------------|--------------------------------|--------------------|
| Rule Name              | Specify Rule Name              | Blank (Mandatory)  |
| Rule Message           | User Friendly Message For Rule | Blank (Mandatory)  |
| Rule Priority          | Integer                        | 0                  |
| Enabled                | Boolean                        | True               |
| Incoming Interfaces    | Drop Down                      | None (Mandatory)   |
| Source IP              | IP address with CIDR           | None (Mandatory)   |
| Destination IP         | IP address with CIDR           | None (Mandatory)   |
| Protocol               | Select the Protocol            | Any                |
| Route Action           | Drop Down                      | Forwarding Traffic |
| Source Port Range      | Integer                        | None               |
| Destination Port Range | Integer                        | None               |
| Outgoing Interface     | Drop Down                      | None (Mandatory    |
| Gateway IP             | IP Address                     | None (Mandatory    |
| Enable NAT             | Boolean                        | True               |

### **Description:**

##### **Rule Name**

This option allows users to select desired rule name.

##### **Rule Message**

This option allows users to use specifies the custom message for the rule.

##### **Rule Priority**

This option allows the user to set rule priority. The rule with lower Priority Value will be prioritized.

##### **Enabled**

It specifies rule is enabled or disabled. By default, this option is enabled.

##### **Incoming Interfaces**

This option allows the user to set Incoming Interface. Every data packet which enters from Incoming Interface will be inspected for the policies mentioned below.

##### **Source IP**

This option allows the user to set the source IP range with a CIDR value. The data packets are inspected and data packets that match with mentioned source IP address will only be routed to the outgoing interface which is selected under the Outgoing Interface

##### **Destination IP**

This option allows the user to set the destination IP range with a CIDR value. The data packets are inspected  and  packets that match with a mentioned destination IP address will only be routed to outgoing interface which is selected under the Outgoing Interface

##### **Protcol**

This option allows users to set custom protocols for rules. The data packets are inspected and data packets that match with mentioned Protocol will only be routed to the outgoing interface which is selected under the Outgoing Interface. By default, ANY protocol is set.

##### **Route Action**

This option allows the user to select either forward the traffic or stop the traffic. If this option is set to forward the traffic, it means packets that match the condition will be forwarded to the specific route which is mentioned under Outgoing Interface. If this is set to stop the traffic It will not forward the packet.

##### **Source Port Range**

This option allows the user to set Source Port Range for the rule. The data packets are inspected and data packets that match with mentioned Source Port Range will only be routed to the outgoing interface which is selected under the Outgoing Interface. 

##### **Destination Port Range**

This option allows the user to set Destination Port Range for the rule. The data packets are inspected and data packets that match with mentioned Destination Port Range will only be routed to an outgoing interface which is selected under Outgoing Interface. 

##### **Outgoing Interfaces**

This option allows the user to select the outgoing interface from the list of interfaces. If any data packet matches the policy mentioned above will be routed to the Outgoing Interface. Users can select the Interface from the drop-down menu.

##### **Gateway IP**

It species the Gateway IP address through which we want to move traffic.

##### **Enable NAT**

This option allows users to enable or disable NAT. NAT is a method of mapping an IP address space into another by modifying network address information in the IP header of packets. If there is any NAT rule already configured by the user, the source or destination IPs address will be mapped accordingly. If there is no such NAT rule added by the user, then the user can add a new rule for Network Address Translation.

