+++
title = 'Towers are not scalable'
date = 2024-04-26T00:00:00-07:00
draft = false
categories = []
tags = []
cover_image='/images/cover/knoxwelle__2017-05-25T215346.000Z.jpg'
+++
It's common to compare software development to constructing highways, dams, and skyscrapers. This analogy makes sense in a few key areas.

The intricacy of the construction process is more challenging than designing a structure that will remain in its final location when it is built.This technique will result in a ready-made building at the end from an empty site at the start. Every employee should be able to use their professional abilities throughout this time, and the partially constructed structure should hold together. This comparison has practical implications for large-scale integrated system implementation. (And almost all web and business apps fall under the "integrated" category!) The classic "Big Bang" deployment involves bringing a large number of beams into the desert, launching them into the air, and then waiting for the beams to self-assemble into a building.

One component should be planned instead. When starting from scratch or replacing an existing system, there are two major benefits to this method.

First, we enter the area of cumulative technical risk embedded in the program code when we release a software product.By deploying components one after the other, this technical risk is spread out across a longer time frame.Since each component has a unique probability of malfunctioning when used, we are able to design each one separately.

 

Second, sequential deployment makes it necessary for us to design distinct component interfaces. Reintegrating a new system's component with the old system is common when one of its components is deployed. Each component will thus have time to work with both the original and the replacement systems by the time the deployment is finished.Thus, component-by-component deployment naturally enhances the capacity for component reuse. In actuality, this also results in less coupling and more coherence.

On the other hand, the comparison falls short in several significant ways. Specifically, the materiality of the real world highlights the importance of early planning and compels us to employ the waterfall method. After all, no one ever begins to construct a skyscraper without having a clear idea of how much area and stories it will require. We attempt to avoid taking such drastic measures because adding floors to an existing building is too costly and dangerous. It is no longer appropriate to alter the once-designed skyscraper's location or height. The towers cannot be scaled.

Although adding new tracks to the road is difficult, we can quickly add new features to the program. It is the dignity of the workplace; it is not a flaw in the development process. Nothing stops us from publishing a minimally functional app if people are willing to pay for these functionalities. In actuality, the outcome's net value increases with the sooner you deliver your application.

Although the gradual deployment strategy and the early release seem at odds at first, they work incredibly well together. It is possible for each component to go through iterative development independently of the others when individual components are released early.Additionally, using this method will compel you to address problems like protocol version control and continuous availability during deployment.

It is uncommon to find methods that offer both better architectural traits and a larger commercial value, yet early component deployment has both benefits.