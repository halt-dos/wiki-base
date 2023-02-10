---
sidebar_position: 2
---

# Events

Overview of various Events and Alerts generated by Haltdos

---

## Overview

Haltdos solutions provides real-time alerts for various types of incidents from attacks to accounting / audit incidents through Events. Events can be generated by the platform and various Apps subscribed in your Stack. You can view all events or filter them based on category, scope and time.

**Events Page**

All events are listed on the Events Page. Filters are available to view events of a specific App/Zone/ Listener and Category. Each event is identified by a unique Event ID which can also be used for searching a specific event on the Events Page. All events are listed in decreasing chronological order.

**Event Details**

Depending upon the type of event, clicking on any Event shows details of the incident. For example, a WAF Attack Event will detail the request/response that got dropped along with details of the request and the reason for dropping the request.

Further to detailing the incident through Events, users can perform various actions. For example, virtual patching functionality is implemented through actions in Event Details. Virtual Patching is the ability to create custom WAF rules from the result of a security scan.

![stackevents](/img/platform/v2/events_newui_.png)

### Event Types

| Type         | Description                                           | App  | Email | Actions                                                                   |
|--------------|-------------------------------------------------------|------|-------|---------------------------------------------------------------------------|
| All         | Displays all the events for configured Resoruce                  | ALL  | No    | --                                                                        |
| Alarm        | Displays details of configured alarms triggered       | ALL  | Yes   | --                                                                        |
| Download     | Displays all the file download events                 | --   | Yes   | --                                                                        |
| Report       | Displays the report generated to be downloaded        | ALL  | Yes   | --                                                                        |
| Instance     | Displays details of any instance notification         | --   | No    | --                                                                        |
| Jobs         | Displays the events for failed jobs                   | ALL  | No    | --                                                                        |
| Backup       | Displays the events for backup                        | ALL  | No    | --                                                                        |



**Filter**

Users can filter out the events based on All, App, Zone, and Listener configured for the specific app.

**Download**

Users can download the events specifying the event count, start time & date, and category i.e. All, Attack, Health. Upon specifying the fields user will click on the Download button and a spreadsheet will be downloaded.

**Auto Refresh**

Users can enable auto-refresh in order to refresh the real-time alerts for requests. The details will be displayed in events for the specific type of request.

:::note
Events are not notified via email or API. To receive alerts, you have to create Alarms. All alarm triggers are notified to selected authorised users on the platform.
:::

