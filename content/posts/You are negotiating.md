+++
title='You are negotiating'
date=2025-04-02T00:00:00-07:00
draft=false
categories=[]
tags=["servers", "system", "manager", "need", "server"]
cover_image='/images/cover/knoxwelle__2020-03-01T225222.000Z.jpg'
+++
Have you encountered projects where reasonable technological solutions are "buried" for the sake of saving costs?

The conversation goes something like this:
"Do we really need X?" asks the project manager. You can substitute X with almost anything essential for
system operations: software product licenses, redundant servers,
external backups or power sources. The question is always asked
in a fatherly tone, as if you were spending all your pocket money on comics
and chewing gum, while serious adults need to think about buying
new buckets in which they will carry their future profits.

The correct answer to this question is: "Yes. Absolutely necessary."
But for some reason, almost no one responds.

After all, we have a technical education, and any technical discipline is an art of compromise. It's clear that exotic things like power supplies won't be needed by anyone if placed in the processing center.
data on several squirrel wheels and put interns in them. And instead of saying "Yes, absolutely necessary," we say something
It seems: "Actually, you can manage without a second server if you're okay with it."
come to terms with downtime due to maintenance and every memory failure.
Although if we buy memory with automatic parity checking, then this too
The problem can be circumvented. So, only operating system crashes remain, on average every 4 days, which means the server will have to be rebooted at night, but interns can easily handle that when they get tired of spinning.
wheels".

And all of this may be completely fair, but you should never say it like that. The manager stops listening to you right after the words "actually."
The problem is that you are looking at the situation from a technical perspective, while your manager clearly understands that he is negotiating. You are engaged in a collaborative search for a solution, while he is conducting a tactical maneuver of the "will it work/will it not work" type. And in any negotiations, you should never make concessions at the first demand. The correct answer to the question "Do we really need X?" sounds something like this:

"Without a second server, the entire system will 'crash' about three times a day,"
especially during peak load periods and when demonstrating at the board meeting. In fact, we need four servers for one
an independent pair ensured the preservation of 100 percent operability, even if the other pair unexpectedly stopped working.

Of course, you know perfectly well that the third and fourth servers are actually unnecessary. This is a tactical gambit that will make your manager change the subject. You raise the stakes and show that the system is already running on a minimal, risky configuration.
Moreover, if by some miracle you manage to obtain additional servers, you can always allocate one for testing (to ensure the testing environment fully matches the production environment), and the other can be turned into an excellent build machine.