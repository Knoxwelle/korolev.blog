+++
title='Thinking about performance is never too early'
date=2024-11-11T00:00:00-07:00
draft=false
categories=[]
tags=[]
cover_image='/images/cover/knoxwelle__2018-09-05T083440.000Z.jpg'
+++
The needs of business application users manifest primarily
in the functional requirements. Non-functional aspects of the system (such as performance, flexibility, uptime, support needs, etc.) are the responsibility of the architect. When
this preliminary testing of non-functional requirements is often postponed until a very late stage of the development cycle, and sometimes
fully delegated to the team servicing the system.

This error occurs much more often than it should. At its core, it can
there are various reasons. Concern for the speed and flexibility of a program that still doesn't properly perform the required function may seem pointless. The test environments and the tests themselves are quite complex. It's possible that early working versions of the system won't be subjected to realistic loads.
due to insufficient use.

However, releasing performance from sight until later stages
project lifecycle, you are losing a huge amount of information
about when changes in performance occurred. If performance is among the important criteria by which they will be evaluated
architecture and system design, then performance testing should be started as early as possible. If you are using an agile development methodology with two-week iterations, then performance testing, in my opinion, should be included in the process no later than the third
iterations.

Why is this so important? First of all, you will at least know about it,
what specific changes led to the sharp decline in performance.
If performance issues arise in the system, you won't have to analyze the entire architecture – it will be enough to focus on the aspects that have changed recently. By starting performance testing early and conducting it frequently, you will narrow down the changes that need to be analyzed.

Even if you don't try to diagnose performance during early testing, you will at least get a set of baseline metrics to work from in your future efforts. Subsequently, this information will play a very important role in identifying the source of performance issues and resolving them.

This approach also allows for the verification of decisions made during the design and development of the system architecture in the context of real performance requirements. If the system has strict requirements, such early verification is especially important for the timely delivery of the finished system.

It is well known that organizing technical testing is not an easy task.
task. Setting up the environment, generating datasets, defining the necessary test cases – all of this takes a lot of time.
Early performance testing contributes to the phased formation of the test environment, saving you from significantly greater time and effort costs when identifying performance issues at a later stage.
late stage.