---
sidebar_position: 3
---

# Monitors

DNS Monitoring in Haltdos GSLB.

---

Haltdos allows users to configure custom monitoring that can monitor the server. These monitors check the health of the server to assist in efficient way to distribute all queries as per server set-up.  

If any of the server are monitored and marked as down, the traffic will not redirect to the same server unless the server comes up and complete the pass threshold meanwhile all the queries will be directed to another server.


### How to Use:
1. Go to  **Stack** > **GSLB** > **Listener** > **Monitors**
2. Click **Add Monitor** button.
3. Configure your settings.
4. Click **Save**.
5. Now go to **GSLB** > **Listeners** > **Zones** > Click on **Zone**
6. Add the monitor to the Zone Server as required

![monitors](/img/gslb/v2/monitor.png)


#### Description

**Monitor Name**  
This option allows the user to set a name for his monitoring rule.

**Health Check Interval**  
This option allows the user to set a health check interval for monitoring the services in seconds. After the mentioned time period, defined monitor settings will be checked.  

**Fail Threshold**  
This option allows the user to set the integer values for the fail threshold limit. When an already set monitor threshold reaches the specified threshold, it will be marked down. Users can set the threshold on network activities like latency, packet drop, and jitter.

**Pass Threshold**  
This option allows the user to set the integer values for the pass threshold limit. When the set monitor threshold reaches the specified threshold, it will be marked up.  

**Monitor Timeout**  
It specifies the timeout after which the monitoring will be marked failed. Users can specify the timeout in seconds.

**Health Check Type**  
It specifies the health check type for monitoring. Users need to select the appropriate type of protocol to monitor the interfaces. By default, TCP is selected.

**Check URI**  
Specify the URI on which request will be send.

**Match Status**  
It Specify the response HTTP status to verify. 200 is by default.

**Match Content**  
It specifies the content that needs to be matched in the fetched resource. 