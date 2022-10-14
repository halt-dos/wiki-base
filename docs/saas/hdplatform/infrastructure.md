---
sidebar_position: 1
---

# Infrastructure

---

Haltdos cloud is maintained and managed 24x7 by Haltdos team. A big question while creating the SaaS service was whether to build our own infrastructure or leverage multiple cloud providers. After a detailed evaluation, we concluded that the Multi-cloud approach offers greater benefits to build an Edge Platform and ensures better security, operability, and reliability.

### Current Network

![current network](/img/saas/infra1.gif)

### Cloud Partners

- **Amazon Web Services** (**AWS**)
- **Google Cloud Platform** (**GCP**)
- **Microsoft Azure**
- **Digital Ocean**
- **Linode**
- **IBM Cloud**

---

## Fundamentals

### Zones

The infrastructure in hdPlatform is organized into Zones, Clusters, and Instances. Haltdos Cloud leverages this concept to organize, manage and maintain infrastructure while keeping logical entities separate.

Haltdos Cloud is hosted across multiple clouds at multiple locations worldwide. While each cloud provider uses its own terminology ("Regions", "AZ", etc), hdPlatform refers to **Zone** as a geographic area. A zone can comprise multiple cloud provider's data centers operating in the said geographic area. It is the responsibility of hdPlatform to seamlessly inter-operate between multiple cloud providers in a specific zone.

Our partner cloud providers operate state-of-the-art data centers. However, in rare cases, failures can occur. hdPlatform is designed to automatically detect failures as and when they occur and move its infrastructure to another cloud provider within the same Zone.

It is important to remember that each Zone is completely independent.

### Clusters

A **Cluster** is the logical building block that makes up a Zone. Each cloud provider's data center within a Zone is a Cluster.

While providing managed services via Haltdos Cloud, we always host services across multiple clusters of a zone to ensure a high degree of resiliency against failures. 

### Instances

An **Instance** in hdPlatform refers to a VM / Bare-metal compute instance running the workload it is configured for by the platform. The instance can be of multiple types, running a specific kind of App. For example, an instance can be created for running the Web Application Firewall (WAF) app for a single tenant.

**Types of Instances**

- **Managed] Shared**: A shared instance, as the name suggests, is an instance that supports multi-tenancy. This instance is managed by Haltdos. If the instance is running the WAF app, then it can be configured to host multiple websites behind the WAF belonging to different customers. 

**NOTE**: Haltdos Cloud has been designed to ensure the separation and isolation of customer data (and metadata) in a multi-tenant environment. 
- **[Managed] Dedicated**: A dedicated instance hosts only one tenant - thereby providing complete isolation (including the data plane). This instance is managed by Haltdos.
- **[Unmanaged] BYOL**: A **B**ring **Y**our **O**wn **L**icense (BYOL) instance is a single-tenant unmanaged instance that is hosted by the customers themselves in their network.  
