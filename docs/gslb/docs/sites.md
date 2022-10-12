---
sidebar_position: 3
---

# Sites

Identification of global data centers through sites

---

## Overview

A GSLB site is the logical collection of GSLB virtual server, GSLB service, LB virtual server, etc. A GSLB service identifies a load balancing or content switching virtual server, which can be at the local site or a remote site. If the GSLB virtual server selects a load balancing or content switching virtual server at a remote site, it sends the virtual server’s IP address to the DNS server. The DNS server sends it to the client. The client then resends the request to the new virtual server at the new IP.
