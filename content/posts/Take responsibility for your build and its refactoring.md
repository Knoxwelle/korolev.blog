+++
title='Take responsibility for your build and its refactoring'
date=2024-12-05T00:00:00-07:00
draft=false
categories=[]
tags=["code", "study", "process", "assembly", "scripts", "application"]
cover_image='/images/cover/knoxwelle__2020-02-27T083740.000Z.jpg'
+++
It is not so rare for teams, which generally discipline themselves to follow good coding practices, to treat build scripts with disdain. They are considered either insignificant or so complex that only a sect of release engineers can maintain them. If build scripts are difficult to maintain, contain duplication and errors, it leads to problems of the same scale as poorly designed code.

Why do responsible and competent developers consider project assembly to be a somewhat secondary task? One explanation is that assembly scripts are often written in a different language than the source code. Another is that assembly scripts are not considered "code." Such explanations are contradictory, as most developers are eager to learn new languages, and it is the assembly process that produces executable modules which developers and end users will test and run. Code is useless if it does not compile into an executable module, and it is the assembly that defines the component architecture of the application. Assembly is an important part of the development process, and assembly solutions can simplify both the code itself and the process of writing it.

If incorrect idioms are used in build scripts, such scripts are difficult to maintain and, worse, difficult to improve. It is worth spending some time to understand how to make changes correctly. If the application is built with incorrect versions of dependent libraries or incorrect configuration parameters are set during the build, it can cause errors in the application itself.

Traditionally, testing was always assigned to the quality control group. Now we understand that testing during the coding process is a necessary condition for achieving predictable results. Similarly, the owner of the build process should be the development team.

Understanding the build process can simplify the entire development lifecycle and reduce costs. If the build process is easy to comprehend and apply, it allows a new developer to quickly and easily get up to speed. Automating the application's configuration within the build process helps ensure consistent results when multiple people are working on the project, avoiding comments like "But it works on my machine." Many build tools generate code quality reports, revealing potential issues in advance. By taking the time to learn and manage the build process yourself, you will make life easier for yourself and all other team members. You will be able to focus on developing new features, benefiting clients and making your work more enjoyable.

Study the build process well enough to know when and how to change it. Build scripts are also code. They are too important to be entrusted to someone else, if only because the application is not finished until it is built. The programming task is not complete until we deliver a working application to the user.