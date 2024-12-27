+++
title='30 97 Things Every Project Manager Should Know'
date=2024-07-10T00:00:00-07:00
draft=true
categories=[]
tags=[]
cover_image='/images/cover/knoxwelle__2021-08-08T051054.000Z.jpg'
+++
30 97 Things Every Project Manager Should Know
Document Your 
Process, Then Make 
Sure It Is Followed
Monte Davis, MCSE
Omaha, Nebraska, U.S.
During an email migrati on from one platf orm to another, a 
woman got married and brought our email system to its knees.
The email flow works like this:
1. New emails coming in are delivered through the new email system.
2. If the new email system can, it delivers the message to the appropriate 
new system user. If not, the message is sent on to the old email system for 
delivery.
3. Emails sent from someone still on the old system to someone still on the 
old system are delivered to the appropriate mailbox. However, if the recipient has already been migrated to the new system, the email is automatically forwarded using a “migration” forwarding address created for each 
user.
Here’s where the funny part comes in. Once Sally Single was migrated to the 
new email system, she had two email addresses, sally.single@mycompany.com, 
as well as a forwarding email address, sally.single@migrate.mycompany.com. 
All email sent to her from users on the old system would automatically be 
forwarded to the new mail system using her “migration” forwarding address.
When Sally got married and changed her name from “Sally Single” to “Sally 
Married,” her email address changed as well. However, the person who 
renamed Sally’s email address in the new system forgot to change her email 
“migration” forwarding address on the old system. So, Sally ended up with the 
following addresses.
Download at Boykma.ComCollective Wisdom from the Experts 31
New System
1. sally.married@mycompany.com
2. sally.single@mycompany.com
3. sally.married@migrate.mycompany.com
Old System
1. sally.married@mycompany.com
2. sally.single@mycompany.com
3. sally.single@migrate.mycompany.com
(Original, unchanged migration entry 
that was overlooked after the wedding.)
When emails were sent to Sally from users still on the old messaging system, 
they created a loop: 1) Messages were created and sent on the old mail system to sally.single@mycompany.com; 2) old mail system checks Sally’s account 
and sees that forwarding is set to sally.single@migrate.mycompany.com and 
forwards the messages; 3) the new mail system looks for someone with an 
email address equal to sally.single@migrate.mycompany.com, but it doesn’t 
find it, since that address was renamed when Sally got married, so 4) the new 
mail system forwards the messages for the unknown recipient back to the old 
mail system; 5) the old mail system knows to forward all messages with an 
@migrate.mycompany.com address, so it forwards them to the new mail 
server; and 6) lather, rinse, repeat.
Every time the messages loop, the corporate legal disclaimer is added to the end 
of the messages. The legal disclaimer is only about 100 words, but when each 
message is looping between systems several times a minute, this adds up quickly. 
Evidently, Sally was very popular. There were so many messages sent to Sally that 
the size and volume of the messages brought the mail system to a grinding halt.
Moral of this story: document your processes and make sure the process is followed. Although the name change process had been documented, it was not 
being followed. Otherwise, Sally’s user account on the old mail server would 
have been updated with her new, married name migration email address, and 
the issue would have been avoided.
Download at Boykma.Com