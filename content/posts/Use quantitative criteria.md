+++
title='Use quantitative criteria'
date=2024-07-05T00:00:00-07:00
draft=false
categories=[]
tags=["ms.", "system", "criteria", "time", "work", "users"]
cover_image='/images/cover/knoxwelle__2020-04-05T190455.000Z.jpg'
+++
"Fast" cannot be a requirement. Nor can "having a good response time." Or, let's say, "scalable." The main reason is the lack of objective criteria for meeting such requirements.
But users still need these characteristics. The architect's task is to ensure that the system possesses the necessary qualities and to balance the inevitable contradictions that arise.
between them. Without objective criteria, the architect depends on whims
the client ("No, I can't accept the program – it doesn't work fast enough") and the developers, obsessed with their compulsions ("No, the program isn't ready yet – it doesn't work fast enough").

Usually, we try to record all such requests, just like any other requirements. But this record often looks like a set of vague
epithets: "flexible," "easy to accompany," and so on. However, everything
criteria of this kind (with sufficient effort, even "ease of use") can be measured in numerical values for which threshold values can be established. If this is not done, users will lose
objective grounds for adopting the system, developers will lose useful guidelines that they can follow during their work, and architects' understanding of the system will lose clarity.

Ask simple questions: how much? over what period of time? how often?
how soon? is it increasing or decreasing? at what rate? If you have
no answers, which means you don't understand what the client needs. The answers should
to be in the economic model of the system, and if they are not there, you will need to think thoroughly. If you are working on the system architecture,
and the client did not give (or is not giving) you these figures, ask yourself why. And then get them. When someone next tells you that the system
must be "scalable," ask him where the new users will come from and why. Ask how many there will be and when this will happen. Don't
be satisfied with the answers "a lot" and "soon."

Fuzzy quantitative criteria should be set in the form of a range: minimum, norm, maximum. If it is impossible to set such an interval, it means that it is unclear what behavior is required from the system. During the work on the architecture, the system can be checked for compliance with these criteria to determine whether it is (still) within acceptable deviations. Deviations in the degree of compliance with certain criteria over time provide useful feedback. Determining these intervals and testing the system for compliance is a labor-intensive and costly task. If no one cares about the system's performance (neither the characteristic itself nor the meaning of the term) enough to pay for performance testing, it is likely that this metric is not significant at all. Focus on the aspects of the system that are worth the effort when designing the architecture.

"The system must respond to user input no more than"
in 1500 ms. Under standard load (defined as...) the average response time should be in the range of 750 to 1250 ms. Response time less
500 ms is not perceived by users, so its drop below this
The threshold will not be paid for." And this can already be called a demand.