# Global Server Load Balancer

Global Server Load Balancing (GSLB) App in Haltdos Platform

---

For companies to deliver the best possible experience to users, they need to ensure always-on connectivity and reliable performance for business applications whenever and wherever they’re accessed. GSLB is a method of distributing traffic amongst servers potentially dispersed across multiple geographies. The servers can be located either on-premise in a company’s own data center, or hosted in a cloud (public cloud or private cloud).  

Most companies deploy server resources at multiple locations, primarily for enabling disaster recovery. “Active‑passive” is the most common scheme used. The active location is used to serve the data, which is duplicated on “passive” or “recovery” sites. If the active site fails, the standby locations come into play. The active‑passive scheme removes the requirement to synchronize data across sites in real-time. Instead, a simpler batch method using less expensive out‑of‑band connections can be used to distribute active site changes to the passive sites. In the above scenario, the role of the global server load balancer would be to simply detect the failure at the active site and divert requests to the passive sites automatically. This could be seen as automation of a manual process of changing the IP address in the DNS configuration for an FQDN. However, the real benefits of GSLB come into play when companies maintain multiple active sites serving the same content, so synchronizing the sites in real-time becomes important.  

Haltdos **GSLB** (Global Server Load Balancing) is a method of distributing traffic amongst servers located in multiple geographies around the world. The servers can be located either on-premises in a company’s own data centers, or hosted in a cloud.