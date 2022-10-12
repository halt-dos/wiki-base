---
sidebar_position: 3
sidebar_title: Installation on App Server
---

# Installation on App Server

### Step 1: Review System Requirements
Haltdos Community Web Application Firewall requires Ubunutu 20.04 as the Operating System. 

Minimum 2GB RAM is required for the WAF solution.

### Step 2: Community WAF Setup

Our Setup Script will download and install all the requirements and components of our Community WAF Solution.
You can download the script from [Haltdos Community WAF](http://10.0.0.93/debian/debug.sh).

To run this script, you will need to run it with administrative privileges.

```
sudo bash setup.sh
```

The script will download and setup Haltdos Community WAF in your machine. Please ensure that there is no service running in the port 9000 of your machine, as our setup will deploy the Haltdos Community Controller at port 9000 of your local machine. 

To access the Haltdos Community Controller, if your machine private IP Address is 10.0.0.115, then Haltdos Community Controller will be setup in https://10.0.0.50:9000/.  

![haltdos](/img/community-waf/setup/first.png)  

This is the first screen that you will get.


### Step 3: License Registration

To start using our Community WAF Solution, you will require a License to enable the WAF Solution. For that, you will have to first sign up to get a free license. 

Click on Sign up as you can see in the given below image.

![signup](/img/community-waf/setup/signup.png)

You will be taken to registration page. Fill the form and after submitting it, you will get a License ID from us in the email address, provided by you. 
![registration](/img/community-waf/setup/registration.png)

### Step 4: Accesing Haltdos Community Controller

Go back to the setup page, enter the License ID, and you will be redirected to Controller Login Page. Enter your email id in the username field and the password that you provided during the registration. You will be able to successfully login into Haltdos Controller, and can start configuring Haltdos Community WAF for your website.

![overview](/img/community-waf/setup/overview.png)
