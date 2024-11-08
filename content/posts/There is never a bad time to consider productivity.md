+++
title = 'There is never a bad time to consider productivity'
date = 2024-06-03T00:00:00-07:00
draft = false
categories = []
tags = ["first", "performance", "system", "testing", "problems", "architecture", "design", "test"]
cover_image='/images/cover/knoxwelle__2016-12-17T154007.000Z.jpg'
+++
The needs of business application users are mostly stated in functional requirements. The non-functional components of the system, such as performance, flexibility, downtime, support needs, etc., are under the architect's control. Concurrently, the system maintenance team may be given full responsibility for the initial testing of non-functional requirements, or the testing may be postponed until a very late stage of the development process.

This is a mistake that happens far more often than it should. It could have several foundations. Worrying about the program's speed and flexibility while it isn't yet perfectly performing the required role may seem pointless. The tests themselves are rather complex, as are the test settings. Early working versions of the system may not have been subjected to a realistic load because of their low use intensity.

But when you put performance until the very end of a project's life cycle, you lose a lot of knowledge about when improvements in performance actually occur. If system architecture and design are to be assessed in part on performance, performance testing should start as soon as possible. If you use a flexible development methodology with two-week iterations, performance testing should, in my opinion, be integrated into the process by the third iteration.

Why is it so important? You will first be aware of the changes that have led to the sharp decline in output.If there are performance concerns with the system, it is sufficient to focus on the aspects that have changed recently; a comprehensive design examination is not required. Regular and early performance testing reduces the breadth of adjustments that need study.

Even if you decide not to try diagnosing performance during early testing, you will at least get a set of basic indicators that you can utilize in your later work. This information will therefore be essential for identifying and addressing the cause of performance problems.

The decisions made throughout the design and development of the system architecture can also be assessed using this method in the context of actual performance requirements.

It is well known that organizing technical testing is a challenging task. Setting up the system, generating data sets, and supplying the necessary test cases are labor-intensive tasks. Early performance testing saves a ton of time and effort when it comes to detecting performance issues later on by allowing the test environment to be established gradually.