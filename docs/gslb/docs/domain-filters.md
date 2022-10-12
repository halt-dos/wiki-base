---
sidebar_position: 2
---

# Domain Filters

---

Domain Filters allows a DNS resolver to modify DNS records. It was originally developed as a way to block access to dangerous websites.  

For example, if a computer queries the IP address of a known dangerous site that spreads malware, the DNS resolver can return NXDOMAIN as the DNS response, so the computer can’t connect to the dangerous site. This is the original use case. As such, Domain Filter is also known as DNS firewall.  
