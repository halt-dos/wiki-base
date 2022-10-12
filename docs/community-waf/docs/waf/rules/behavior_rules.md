---
sidebar_position: 6
---
# Behavior Rules

### Overview
The Behavior rule is a feature of Haltdos WAF that that allows application owners to identify the malicious user intent with the help of the behavioral engine.

![behaviour Rule](/img/community-waf/behavior_rule_2.png)


### How to Use:
1. Log onto the Haltdos Community WAF portal.
2. Go to **WAF** > **Rules** > **Behavior Rules**.
3. Click on the Add Rule Button and a pop-up box will open.
4. Configure the fields that are present.
5. Click on Save Changes and the rule will be reflected.

| Parameters      | Accepted value |  Default       |
|-----------------|----------------|----------------|
| Rule Name       | String         | Blank          |
| Rule Message    | String         | Blank          |
| Rule Priority   | Integer        | 0              |
| Rule Action     | Drop-down      | Record-request |
| Variable Name   | Drop-down      | Blank          |
| Condition       | Drop-down      | Pattern exist  |
| Condition Value | String         | Blank          |


### Description
#### Rule Name
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

#### Rule Message 
Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created.

#### Rule Priority
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0.

#### Rule Action
Users are allowed to specify the action to be taken for the request matched i.e. no action, drop & record request, record request, bypass request, redirect.

#### Variable Name
Users are allowed to select specify the variable from the drop down.

#### Condition
Users are allowed to specify the condition from the drop-down menu.

#####  Pattern Exists
This is selected if condition value pattern exist.
   
##### Pattern Not Exists
This is selected if condition value pattern doesn't exist.
   
##### Min Value
Select if condition minimum value matches for selected variable.
   
##### Max Value
Select if condition maximum value matches for selected variable.
   
##### Min Length
Select if condition minimum length matches for selected variable.
   
##### Max Length
Select if condition maximum length matches for selected variable.
   
##### Equals
Select if condition value equal value matches for selected variable.
   
##### Not Equals
Select if condition value is not equal for selected variable.
   
##### Less Than
   
##### Greater Than

#### Condition Value
Users are allowed to specify the condition value for the rule.


