+++
title='182 97 Things Every Project Manager Should Know'
date=2024-07-10T00:00:00-07:00
draft=true
categories=[]
tags=[]
cover_image='/images/cover/knoxwelle__2021-08-08T051054.000Z.jpg'
+++
182 97 Things Every Project Manager Should Know
The Web Points 
the Way, for Now
David Wood
Fredericksburg, Virginia, U.S.
There is a charity group whose slogan is “We stand on the shoulders of those who came before us. We provide the shoulders for those who 
follow us.” This quote is relevant for us as software developers. As each new 
architecture, language, or platform rises to prominence, we tend to sigh, “This 
is the answer to all of our programming problems.” And while it may solve 
today’s issues, tomorrow there will be new challenges facing us.
Currently, we know of exactly one software architecture that scales to billions 
of users and does so while being robust*
 to failures of individual components: 
the World Wide Web. The Web is the largest, most used, and most robust 
information retrieval system ever built by humankind—so far.
Why does the Web work so well? Roy Fielding, a founder of the vaunted 
Apache project,†
 researched this very question. Fielding evaluated the architecture of an idealized version of the early Web and extracted architectural 
style elements from it.
The result was a new software architectural style with the properties that we 
have come to love about the Web. They are robust to both change and failure of 
specific components. They separate concerns so we stop caring about implementation details such as programming languages. They use a common lingua 
franca (a language for communication among those who don’t speak the same 
mother tongue) to exchange language-neutral requests for information. They 
scale mightily. They are stateless.
* Robust: Capable of coping well with variations, sometimes unpredictable ones, with minimal damage, alteration or loss of functionality. 
† Apache project: An open source project to develop and maintain free web server software for modern operating systems. 
Download at Boykma.ComCollective Wisdom from the Experts 183
Not every website uses these guiding principles, but many do, and the Web as a 
whole uses them. However, these are only the shoulders on which the continuous development of new and innovative architectures will rest.
We can learn important things from the Web’s success. Perhaps the most 
important is that Moore’s Law‡
 now allows us to accept a great deal of abstraction in our system design. Instead of being overly efficient with our hardware 
and software, we can now think about being overly stable, overly robust, overly 
scalable, and overly flexible. And we can accept the inefficiencies of our current architectures, knowing full well that they are only a foundation for future 
innovations.
Distributed systems, like the Web, are hard to design. Perhaps this is because 
each of us is an individual. We treat our software systems like something that 
an individual creates, centralized as we each see the world. The Web’s distributed systems have shown us the way, though. Distributed systems are harder to 
conceptualize, and thus harder to create, but creating them is worth the effort.
Naturally, technology changes. Ideas and techniques change, too. The simple 
Web of Fielding’s description is not the modern Web. Nor will it be the Web 
of the future. The Web may not always point the way. The key to adapting to 
new systems will be to design flexibility into our systems now. Only then can 
we begin to create living, breathing, adaptive software systems that are ready 
to integrate with new discoveries, providing the shoulders for those who follow us.
‡ Moore’s Law: This law describes a long-term trend in computer hardware in which the number of 
transistors that can be placed, inexpensively, on an integrated circuit has increased exponentially. 
Download at Boykma.Com