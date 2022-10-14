---
sidebar_position: 8
---

# Virtual Machines

Built on proprietary hypervisor technology

---

Haltdos ADC leverages proprietary hypervisor technology to provide virtual instances (VM) that can run independently of other VMs. Virtualization provides ability for organizations to support multi-tenancy and extend Haltdos hardware to support multiple self-contained applications behind different virtual instances. The host hardware machine along with virtual instances can be used to run various apps (WAF, SLB, ADC, DDOS, GSLB, etc.) depending upon your configured license. 

Haltdos leverages the use of SR-IOV and fast path technology to optimize traffic to and from virtual instance to ethernet NICs. The number of virtual instances that can be created depends on hardware capacity and configured license. Multiple virtual instances can be grouped together in a virtual stack that can be managed by different administrators. 

Virtual Instances can be resized based to increase / decrease CPU, RAM & Hard Disk. Haltdos provides pre-built images supporting different Operating Systems (OS) and versions. You can manage your OS templates from Haltdos console (see VM Templates) .

![virtual_machines](/img/platform/virtual_machines1.png)

:::info
The resources allocated to each virtual instance is dedicated to the virtual instance and cannot be leveraged by another virtual instance. This is done to ensure complete isolation of virtual instances.
:::

![virtual_machines](/img/platform/virtual_machines2.png)
