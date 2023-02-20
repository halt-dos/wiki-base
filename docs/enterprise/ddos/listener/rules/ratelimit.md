---
sidebar_position: 6
---

# Rate Limit Rules

---

### How to Use:

1.Go to **DDOS** > **Listeners** > **Rules** > **Rate Limit Rules**.

2. Select the Rate Limit Rules.

3. Click **Add Rule** button.

4. Configure your settings. 

5. Click Save Changes

![Rate Limit rule](/img/ddos/v2/ratelimit.png)

![Rate limit rule](/img/ddos/v2/ratelimit1.png)

| SETTINGS       | ACCEPTED VALUE | DEFAULT      |
|----------------|----------------|--------------|
| Rule Name      | String         | Blank        |
| Rule Message   | String         | Blank        |
| Rule Priority  | Integer        | 1            |
| Rule Action    | Drop Request   | Drop Request |
| Max Rate           | Integer        | 10           |
| Track Limit    | Integer        | 20           |
| Track Duration | Integer        | 1            |

#### Description:

#### Rule Name

The user can define the rule name.

#### Rule Message

The user can define the rule message.

#### Rule Priority

The user can define the rule priority for this particular rule among various other rules in Rate Limit Rules

#### Rule Action

The user can define what action needs to be taken when this rule condition is matched.

#### Max Rate

The user can define the request rate for the page

#### Track Limit

The user can define the track limit in order to track if the rate is exceeding the limit or not.

#### Track Duration

Specify the time duration for which the rule will limit the request.

### Rule Condition

![Rate Limit rule](/img/ddos/v2/ratelimit2.png)

| SETTINGS        | ACCEPTED VALUE | DEFAULT   |
|-----------------|----------------|-----------|
| Find Location   | Drop-Down      | Source IP |
| Find Parameter  | String         | Blank     |
| Match Condition | Drop-Down      | Contains  |
| Match Value     | String         | Blank     |

### Description:

#### Find Location

User can define the source location where this condition needs to be applied.

#### Find Parameter

The user can define the parameter based on the location of the condition.

#### Match Condition

The user can define the match condition for the parameter and match value.

#### Match Value

The user can define what value needs to be matched with the match condition.