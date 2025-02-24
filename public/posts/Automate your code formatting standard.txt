+++
title='Automate your code formatting standard'
date=2024-07-25T00:00:00-07:00
draft=false
categories=[]
tags=["new year", "standards", "code", "standard", "project", "tools", "anti-patterns"]
cover_image='/images/cover/knoxwelle__2019-11-06T002124.000Z.jpg'
+++
You probably went through this too. At the beginning of the project, everyone has plenty of good intentions – let's call them "new project promises." Similar to New Year's resolutions that people make for themselves: to exercise, quit smoking, etc. Quite often, many of these promises are documented. Promises related to code make it into the project's code formatting standards. At the first project meeting, the lead developer announces this document, and ideally, everyone agrees to diligently follow the proposed requirements. However, as the project progresses, all these good intentions are forgotten one by one. When the project is finally completed, the code looks quite tangled, and it seems that no one understands how it ended up that way.

When did it all go wrong? Most likely, it was at that very first meeting. Some participants were inattentive. Others didn't understand the purpose of the standard. Worse still, some were against the proposed standard and directly instigated a rebellion against it during the meeting. And even those who understood and agreed, at some point in the project's work, were forced by circumstances to simplify their lives. After all, well-formatted code will not be appreciated by a client who needs new features in the application. Moreover, adhering to the code formatting standard can be quite a tedious task if it is not automated. Try to set the indents in a poorly written class, and you will see for yourself.

But if it's so difficult, why should we even create a code formatting standard? One of the goals of uniform code formatting is to prevent anyone from "privatizing" the code by formatting it in their own special way. Developers should also not be allowed to apply certain anti-patterns to avoid a number of known mistakes. Overall, the formatting standard should make working on the project easier and maintain a constant development speed from start to finish. Hence, support for the standard should be unanimous: it's bad if one developer uses three-space indents and another uses four.

There are many tools available for generating code quality reports, as well as documenting and maintaining code formatting standards, but this is only part of the solution. Standards should be automated and enforced wherever possible. Here are some examples:

- Make code formatting part of the build process so that it happens automatically with each code compilation. - Use static code analysis tools to find undesirable anti-patterns. Interrupt the build when they are detected. - Learn to configure these tools, which will help identify anti-patterns specific to your project. - Don't just measure test coverage percentage, but also perform automatic evaluation of the results. Interrupt the build if the test coverage percentage is unacceptably low.

Try to implement these principles regarding all code requirements that you consider important. You will not be able to fully automate everything that concerns you. Those aspects that cannot be detected or fixed automatically should be included in an additional set of rules—as an appendix to the automated part of the standard. However, you will have to accept the fact that you and your colleagues will have the opportunity to adhere to the rules from this appendix less strictly.

Finally, the coding standard should evolve rather than be set in stone. Over time, the needs of the project change, and what seemed reasonable at the beginning may not necessarily remain so after a few months.