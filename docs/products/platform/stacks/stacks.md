
# Stacks

Overview of Stacks and Licenses

---

## Overview

Think of a Stack as a collection of services and settings that you create for a project or website. Many customers use just one Stack. If you manage multiple web properties that you'd like to track separately or require a different set of tools, then creating multiple stacks is the way to go.
Stacks form the basis for creating, enabling, and using all Haltdos services including managing APIs, enabling billing, adding and removing collaborators, and managing permissions for your resources.

![stacks](/img/platform/v2/stack.png)

### Stack Creation: 

A stack is equivalent to a license in the traditional appliance. Based on the provided license on your Haltdos appliance, appropriate stack would be configured. If your license includes virtual ADC, you can create your own vADC stack. If you are using Haltdos Centralized Management solution, you can manage multiple stacks as well. 


#### To create a Licensed Stack: 

1. Go to **System** > **Stacks**
2. Click on **Add Stack**
3. Enter License ID provided by Haltdos Support Team.
4. Click **Save Changes**  

![license](/img/platform/v2/add_stack.png)

#### To create a Virtual Stack: 

1. Go to **System** > **Stacks**
2. Click on **Add Stack**
3. Enable Virtual Stack option for creating a Virtual Stack.
4. Select an existing license that supports vADC.
5. Click **Save Changes**  

:::note
Virtual Stack Option is only visible in GUI if your license supports virtualization
:::

![virtual](/img/platform/v2/virt_stack.png)

### Stack Subscriptions: 

After the creation of the stack, the stack will be subscribed to all Apps issued to the stack. Haltdos provides various Apps like [**WAF**](/products/waf/), [**DDoS**](/products/ddos/), [**LLB**](/products/llb/), [**GSLB**](/products/gslb/), etc. Depending upon the license issued to you, your stack will support the respective features and capabilities. These capabilities may be further restricted based on allowed throughput limit, feature limit depending upon the subscribed license. A stack can support multiple Apps simultaneously. This means that the same stack can support capabilities of DDoS, Web Application Firewall (WAF), Application Delivery Controller (ADC /SLB), etc. - all at the same time.

:::note
The limit on your stack depends upon allotted license. These limits can be increased by upgrading your current license. Contact Haltdos Sales or Support for more information.
:::