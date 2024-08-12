+++
title = 'There may be several solutions'
date = 2024-05-25T00:00:00-07:00
draft = false
categories = []
tags = ["philip k. dick", "data", "world", "time", "system", "organization"]
cover_image='/images/cover/knoxwelle__2023-01-10T110354.000Z.jpg'
+++
One data model, one message format, one transport mechanism (and generally exactly one basic architectural component, policy, principle, etc.) cannot serve all aspects of a business organization equally well.It seems that this fact is an endless source of surprise and sadness for the developers of the systems.At the same time, it is quite natural: since the organization (the word “organization” is highlighted here with the fat red line) is large enough to worry about how several different tables of accounts will affect the system in the next decade, it must be too large and heterogeneous to be able to handle a single table.

In the technical field, uniformity can be enforced.And it's very convenient for us.However, in the field of business, a controversial, multifaceted, informal, troubling real world comes into play.Worse still, have to deal not even with the real world, but with people's opinions about certain aspects of situations in certain parts of the world.You can, of course, try to treat this area as technical and introduce a single solution in order of order.However, reality is informally defined as “what doesn’t disappear when you stop believing in it” (Philip K. Dick), and as business develops, problems always return.So there are corporate data teams that spend all their (very expensive) time curbing existential horror through DTD1 juggling. 

The response time of such systems is usually unsatisfactory from the customer's point of view.

Why not accept the reality of an inconsistent world and prevent the existence of several inconsisting, overlapping ideas, services, solutions?Yes, the technical expert in each of us, when he hears that sentence, shrinks with horror.We immediately imagine nightmarish scenarios: uncoordinated updates, unnecessary maintenance costs, clumps of addictions that have to be managed...But let's borrow some useful experience from the world of data storage.Data fairs (data marts) are often denormalized (in a relational sense), they arbitrarily mix imported and calculated values, and the data representations are very different from the data presentations in the source databases.And at the same time, there is no disaster from the presence of the data disfunctional properties.At the border of two completely different worlds – usually data operations and analytical processing with their characteristic differences in update and sampling frequencies, in bandwidth, in the frequency of changes in structure and, possibly, even in volume – is E L-process1.This is the key to the challenge: sufficiently strong differences in the non-functional properties of the system form the boundary through which it is possible to organize the practical management of disharmonized representations.



Of course, you should not duplicate the presentations or create alternative transport mechanisms just for the sake of entertainment.But you should always bear in mind that the decomposition of the system by non-functional parameters can open up favourable opportunities for creating varied solutions for the benefit of your customers.