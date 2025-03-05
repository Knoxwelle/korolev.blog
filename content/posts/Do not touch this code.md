+++
title='Do not touch this code'
date=2025-02-15T00:00:00-07:00
draft=false
categories=[]
tags=["development", "server", "testing", "code", "team"]
cover_image='/images/cover/knoxwelle__2017-06-04T121515.000Z.jpg'
+++
Each of us has had something like this happen at some point. Your code has been uploaded to the staging server for system testing, and the department head
Testing informs you that there is a problem. You are immediately ready to respond: "Let me quickly fix everything: I know what the issue is."

However, in a broader sense, the problem is that you, as a developer, believe you should be granted access to the server where testing is being conducted.

In most cases, when it comes to web development, the architecture can be broken down into the following parts:

-Local development and unit testing on the developer's machine
- Development server where automated or manual integration testing is conducted
- Staging server, where the quality control team and users conduct acceptance testing
- Combat (production) server

Yes, there are other servers and services, for example, for managing source code or software defects, but the idea is clear. In this model, the developer –
even the lead developer – under no circumstances should have access beyond the development server. The main development takes place on the programmer's local machine using their favorite IDEs, virtual machines, and some
useful for the success of the black magic endeavor.

After saving the code in the repository, whether manually or automatically, the code
must be deployed on the development server, where it can be tested
and, if necessary, adjust it to ensure that it works correctly
in this environment. And from this moment on, the developer can only observe the process.

The intermediate server administrator should package and transfer the code to
intermediate server, where it will be worked on by the quality control team. Just as developers should not have access beyond the development server, the quality control team and users should not go beyond the testing environment. If the version is ready for acceptance testing, build the version and roll it out: do not offer users a "quick fix."
"take a look at this" on the development server. Remember, except for situations
"one warrior in the field," on the server there is code from other authors, which may not be
ready to show it to the users. The person responsible for releasing versions is the only one who should have access to both servers.

Under no circumstances should the developer be allowed access to the production server. If problems arise, the support team should either handle them themselves or suggest that you make the corrections. When you save the fix in the repository, the support team will take the "patch" from there. Some terrible complications on projects I was involved in arose because someone (guess who) broke this rule. If the application broke, the production server is not the place to make fixes.