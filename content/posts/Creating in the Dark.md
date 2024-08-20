+++
title = 'Creating in the Dark'
date = 2024-07-21T00:00:00-07:00
draft = false
categories = []
tags = ["architecture", "respond", "http", "prevention systems", "ids", "network maps", "network", "zone", "sonet", "b.", "mouse run", "html", "arrow", "xml", "request", "components"]
cover_image='/images/cover/knoxwelle__2017-06-18T215508.000Z.jpg'
+++
The software components of the system are interrelated. Architecture refers to the hierarchical structure of various program components as well as their cohesive connections.Individual program components and servers are frequently simplified into rectangles connected by arrow keys on diagrams showing such systems.

The meaning of a single little arrow could be "Synchronous SOAP-XML Request/Respond via HTTP." One chart element cannot include all the information that is available. Since there is typically not enough room for everything to be written, we label the arrow with "Search by product code" (for external users) or "XML through HTTP" (from the perspective of internal implementation).

Although it appears to be a direct communication, the arrow connecting the programs is not. Hardware and software components occupy the space in between rectangles. Specifically, the following is located:

-Firewalls, Intrusion Detection and Prevention Systems (IDS/IPS), Network Maps, and Network Switches
Zone tables; FTP servers; XML conversion mechanisms; brokers or message queues;
MPLS gates; SoNET rings; highway lines
Seas and bottom cables damaged by fishing trawlers

There are always four or five computers operating package switching, traffic analysis, routing, threat analysis, etc. between program elements A and B. Furthermore, you, as the architect joining these software modules, need to consider that this interim environment exists.

I once came across an arrow that said "implementation." My client's business had one server installed, while the other was situated in a totally different area. This pivotal client arrow set off a series of events more akin to the Mouse Run game than a solitary interface. Brokers received the messages, stored them in files that were loaded via FTP, etc. There were more than 20 steps in this "interface.".

It is essential to comprehend the static and dynamic loads that are applied to each arrow.It might also be worthwhile to include the following next to "SOAP-XML over HTTP" by the arrow: "One call is accepted for each HTTP request, and one response is returned for each HTTP answer." It is anticipated that up to 100 queries per second will be made, with 99.999% of those requests being fulfilled in under 250 milliseconds.

That's not all there is to know about this arrow, though:

-What happens if someone calls you too frequently? Ignore requests, refuse them politely, or attempt to process them, if at all possible, is how the recipient should respond.
If the request processing took more than 250 milliseconds, what should the person making the call do? Are you up for another try? Hold on a second. Determine that the receiving end of the communication failed and proceed without this feature.
What occurs when a version 1.1 response is issued in response to a version 1.0 request made by the calling party? What if XML was not obtained but HTML? Perhaps, instead of an XML file, an MP3 file?
What occurs if there is a brief outage of access to one side of the interface?

The key to creating "in empty space" graphics is knowing the answers to these queries.