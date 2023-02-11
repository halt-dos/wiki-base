# Listener 
Make DDOS listen on specific ports to accept connections and mitigate the attacks.

---

## Overview 
Listeners are used for configuring websites and servers appropriately that it can help to reduce response time, increase throughput, optimize resource use and overload of any single resource.

![listner](/img/ddos/v2/listner.png)

## How to Use :

1. Go to **Apps** > **DDos** > **Listeners**

2. Click **Add Listener button.**

3. Configure your settings.

4. Click **Save. Changes**

![add-listner](/img/ddos/v2/add_listner.png)

|Parameter | Accepted Values | Default 
| ----------- | ----------- |---------|
| Sub Domain| Website Name | Blank
|Service Type|Drop-down|HTTP
|Origin Servers & port|Server IP’s with listening port(Ex. 8.8.8.8:80)|Blank

## Description 

1.**Sub Domain** :
This option allows user to specify fully qualified domain name of the website. Whenever adding the root domain, ensure it is empty.

2.**Service Type**:
This option allows user to specify service type based on the protocol of backend application. The listener/subdomain can be created service type with any of the three protocols i.e. HTTP, TCP.

3.**Origin Servers**:
This option allows user to specify IP and listening port of the backend server wherein load balancing occurs. There can be combination of multiple IP and listening port.
