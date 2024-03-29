# Error Rules
These rules mask application exceptions and errors with custom pages.

---

## Overview 
Error Rules is a feature of Haltdos DDOS that allows application owners to show custom pages without revealing internal exceptions generated by the application upon failure. The custom pages can be created for specific HTTP error codes respectively and thus be used with the error rules.

![ErrorRule](/img/ddos/v2/error_rule.png)

### How to Use
1. Go to **Apps** > **DDOS** > **Listeners** > **Rules** > **Error Rules**.
2. Click on **Add Rule** and set relevant parameters described in the table below.
3. Click on **Save Changes**.

| Parameters | Accepted Values | Default |
| ----------- | ----------- |------------|
| Rule Name|String|Empty
| Rule Message|String|Empty
| Rule Priority|Integer|0
| HTTP Response Code|400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425,426, 428, 429, 431, 440, 444, 449, 450, 451, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504. 
| Rule Action|No Action / Send Response|No Action
| Custome Error Page | User can add custom error page that will be visible to end-users

### Description

#### Rule Name

Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

#### Rule Message

Specify a rule message containing a detailed description to identify the rule which is to be created.

#### Rule Priority

Specify the priority for the rule for execution when matched with the request.

#### HTTP Response Codes

User can mention the HTTP response code based on the custom error rule name.

#### Rule Action

Specifies the action to be executed when this is gets triggered

#### Custom Error Page**

Select the desired custom error page which will be displayed when the specified error occurs. Or click the **Add** button which redirects to the custom pages screen to create a custom page and add HTML content and then select it from the drop-down list.