+++
title='The performance of an application is determined by its architecture'
date=2025-02-21T00:00:00-07:00
draft=false
categories=[]
tags=["application", "performance", "architecture", "product", "fine-tuning"]
cover_image='/images/cover/knoxwelle__2017-05-18T195656.000Z.jpg'
+++
The performance of an application is determined by its architecture. At first glance, it seems that this statement should be obvious, but real-world experience shows otherwise. For example, software architects often believe that application performance issues can be resolved simply by switching to software infrastructure from another vendor. The source of this belief may be the advertising hype surrounding testing results – for example, it is claimed that the leading company's product outperforms the nearest competitor by a certain percentage. However, if the leading product performs an operation in 3 milliseconds, while the competing product does it in 4 milliseconds, the claimed percentage (one millisecond) means very little against the backdrop of overall low performance rooted in architectural inefficiency.

Besides IT managers and performance testing teams, there are
and other groups of people, such as the support service of the development company
and authors of books on application performance management, which
they recommend fine-tuning the application infrastructure:
play with memory allocation operations, connection pool sizes,
the sizes of thread pools and so on. But if the application is designed
not sufficiently efficient for the expected load or its functional architecture irrationally uses computational resources, then
No amount of fine-tuning will ensure the desired performance and scalability. A complete redesign of the internal logic and/or deployment strategy will be required.

Ultimately, behind the facade of any manufacturer's product and architecture
of any application, the same fundamental principles of distributed data processing and physical laws apply: applications
and the products they use are executed as processes on computers
limited capacity, interacting with each other through protocol stacks and communication channels with non-zero delays. Therefore, people should understand and accept the idea that the application architecture is
the main factor determining its performance and scalability. These qualitative characteristics cannot be improved as
by magic – a miraculous change of technologies or a fine-tuning of infrastructure. Any improvements in these areas require
hard work on the meticulous development of the architecture.