+++
title='128 97 Things Every Project Manager Should Know'
date=2024-07-10T00:00:00-07:00
draft=true
categories=[]
tags=[]
cover_image='/images/cover/knoxwelle__2021-08-08T051054.000Z.jpg'
+++
128 97 Things Every Project Manager Should Know
Know Your 
Integration Points
Monte Davis, MCSE
Omaha, Nebraska, U.S.
The heartache of every systems administrat or, development engineer, and software project manager is systems integration. No matter how 
promising a newly created application, a freshly purchased software package, 
or a long-awaited, new-feature-laden upgrade, the business value rests in getting it to work smoothly within the existing company system.
If you are an experienced project manager, but new to the information technology arena, don’t let the term integration confuse you. Integration simply 
means linking together all of your various software programs so that all of 
the subsystems work together to give you more functionality than you could 
gain from any one application on its own. For example, you want data entry to 
occur only once and the information to flow smoothly to sales representatives, 
to accounts payable and receivable, and into other systems that allow various 
employees to pull up the information they want, regardless of the software 
interface they open.
Unfortunately, it’s often a tense time when new software upgrades are required. 
They may introduce trouble into a smoothly running process flow. Recently, 
we had a situation where an upgrade was scheduled for one of our systems. 
During the upgrade process, the vendor encountered unexpected errors.
There were several views (preprogrammed screens configured to show specific segments of the database information) that were causing the upgrade to 
fail. The outside vendor doing our upgrade didn’t know what the views were 
being used for, so it deleted them. The rest of the upgrade appeared smooth.
Several days later, a service desk ticket was submitted for a completely separate 
system that was having issues. Users weren’t seeing any new customer data 
come across from the system that had been upgraded the previous weekend. 
Download at Boykma.ComCollective Wisdom from the Experts 129
As it turns out, the views that had been deleted were the source for the missing 
customer data.
Since the source views were deleted to complete the upgrade, the synchronization process between the systems was broken. We had to spend hours troubleshooting the system before we came to the conclusion that the source views 
were missing. Then we had to recreate the deleted views, by hand, in order to 
get the two systems talking again.
Most IT departments have diagrams showing how the various components of 
their hardware systems are connected. But we’ve found it is equally helpful to 
have a visual representation of how data flows throughout our organization. 
Show the crucial junctures where data from one application flows into other 
programs.
We learned that in situations like this, it helps to have good documentation 
illustrating where your systems are reliant on one another. When we initially 
met with the vendor engaged to manage our upgrades, we could have shared 
our business flow diagram.
The initial upgrade problems could have been solved in another way, rather 
than deleting crucial views that fed other systems. We could have saved ourselves downtime and administrator stress, and come out of the upgrade process 
confident that we didn’t have to live in fear that other, hidden problems had 
been introduced to the system.
Download at Boykma.Com