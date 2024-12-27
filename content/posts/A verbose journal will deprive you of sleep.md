+++
title='A verbose journal will deprive you of sleep'
date=2024-09-26T00:00:00-07:00
draft=false
categories=[]
tags=[]
cover_image='/images/cover/knoxwelle__2018-10-15T181851.000Z.jpg'
+++
When I encounter a system that has been in development or operation for a long time, the first sign of real trouble is always a "dirty" log. You know what I'm talking about: it's when clicking a link during normal web page usage results in a whole stream of messages being recorded in the system's single log. Too many log entries can be just as useless as having none at all.

If your systems are similar to mine, then when your work ends, the work of others begins. After the development is completed, the system will be long
and successfully serve customers (if you're lucky). How will you learn about problems if the system is in operation, and what will you do about them?

Perhaps someone is monitoring the system instead of you, or maybe it is
you do. In any case, monitoring probably involves viewing
magazines. If something happens and you are woken up in the middle of the night, it is preferable that
the reason was valid. If my system is dying, I need to know about it. But
if she just hiccupped, I would prefer not to have my sweet sleep disturbed.

In many systems, the first sign of trouble is a message being logged in some kind of journal. Usually, it's an error log. So
do yourself a favor: organize the process in such a way that from the very first
days of development, as soon as something appears in the error log, you were woken up
in the middle of the night with a phone call. If during system testing you
you will be able to model the load on your system, a clean error log will most likely testify to the reliability of your system, while a "dirty" one will serve
the first warning signal.

Distributed systems create an additional level of complexity. You need to decide how to act in the event of external dependency failures. If the system is highly distributed, this can happen frequently. Take this circumstance into account when choosing a logging policy.

Overall, the best evidence that everything is fine is the regular appearance of low-priority messages. I am satisfied when there is approximately one INFO-level message for each significant event in the application.
A too detailed log indicates that the system is difficult to control.
during operation. If you assume that the error log should
remain empty, it will be much easier for you to understand the problem when it is
something will eventually appear.