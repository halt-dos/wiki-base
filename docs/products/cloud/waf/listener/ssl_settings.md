---
sidebar_position: 3
---
# SSL Settings

It provides functionality to support SSL offloading based on configurations

---

### Overview

It provides functionality to support SSL offloading based on configurations.

### How to Use:

1. Go to **WAF > Zones > Listeners > SSL Settings**

2. Configure your settings. 

3. Click **Save Changes**.

### Description:

##### **Encrypt Traffic to Upstream**

This specifies WAF should re-encrypt traffic before sending it to the backend web application. 

:::note
WAF can listen to non-HTTPS traffic and send as HTTPS traffic to the backend server.
:::

##### **Enable SSL Offloading**
This option specifies if the WAF should enable HTTPS traffic for the configured website.

##### **SSL Certificate**
This field allows us to Select or Upload an SSL Certificate for SSL Offloading in case of encrypted traffic. Users can select the SSL certificate from the drop-down or add a new certificate by clicking the ADD button which will redirect to the SSL Certificates page

##### **SSL Ciphers**
It is a set of algorithms or a set of instructions/steps that helps to establish a secure connection between two entities — usually the client (a user's browser) and the web-server they're connecting to (your website). Users can select respective ciphers from the drop-down.

##### **SSL Ciphers Suites**
In order to secure or make SSL compatible with specific web browsers. Users can select from the drop-down i.e. Modern(Very Secure), Intermediate (Recommended),  Old(Backward Compatibility), Custom, etc.

##### **SSL Session Caching**
This option allows users to specify the number of SSL session cache for HTTPS requests on the listener.

##### **SSL Session Timeout**
This option allows users to specify the SSL session timeout in minutes for every HTTPS request on the listener.

##### **Client Certificate Verification**
This option specifies if the solution should enable client certificate authentication. The following  option can be used

- **Disable** - Disable client certificate verification
- **Enable** - Enforce client certificate verification
- **Optional** - For this, client certificate verification is optional. If the client pass the client certificate in the request, Certificate verification will be performed. For no certificate, the request will be forward without verification.

##### **Client Certificate**
This option specifies an SSL certificate for Client Authentication.

##### **Certificate Revocation List​**
This option specifies a revocation certificate for Client Authentication.

For the revocation list, the client certificate will be blocked independent of the security profile or action. As we have configure as revoked client certificate, no event will be created.

##### **Redirection URL​**
Specify the redirection URL on client certificate verification failure

##### **Client Certificate Fingerprint Header**
This option specifies header name for forwarding SSL certificate fingerprint to be upstream

##### **Client Certificate Issuer Header**
This option specifies header name for forwarding SSL Certificate Issuer to be upstream

##### **Client Certificate Subject Header**
It specifies header name for forwarding SSL certificate Subject to be upstream

##### **Client Certificate Serial Header**
This option specifies header name for forwarding SSL certificate Serial to be upstream

##### **Client Certificate Verify Header**
This option specifies header name for forwarding SSL certificate verified to be upstream

##### **Client Certificate Start Date Header**
This option specifies header name for forwarding SSL certificate start date to be upstream

##### **Client Certificate End Date Header**
This option allows user to add header name for forwarding SSL certificate end date to be upstream.

##### **Invalid Client Certificate Action**
This option allows user to specify the action to be performed when client certificate verification fails.

- **NO ACTION** - No action will be taken on the failure.
- **DROP** - The request will be blocked on the failure.
- **RECORD** - The request will be recorded and shown on the console on the failure.
- **REDIRECT** - This will perform request redirection to URL specified in the Redirection URL field on the failure.

:::note
For **BYPASS** mode in the security profile, No action will be taken on the failure. For **RECORD** and **MITIGATION**, specified action will be performed on client authentication failure.
:::