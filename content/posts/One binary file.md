+++
title='One binary file'
date=2025-02-06T00:00:00-07:00
draft=false
categories=["git"]
tags=["environment", "bazaar", "git", "code", "changes", "version", "production"]
cover_image='/images/cover/knoxwelle__2017-05-03T170121.000Z.jpg'
+++
I have encountered projects where part of the code was rewritten during the build process so that a separate binary file was generated for each runtime environment. This approach always complicates things unnecessarily and creates the risk of incompatible versions appearing with each installation. At the very least, several almost identical instances of the program are built, each intended for installation in its corresponding environment. Too many moving parts arise, which means more opportunities for error.

Once, I worked in a team where after every property change, it was necessary to save the code and conduct a full build cycle, so the testers were idle every time a minor bug was found (did I mention that the project also took an incredibly long time to build?). I also worked in a team where system administrators required a full rebuild of the program before it went into production (using our own build scripts), making it impossible to guarantee that the version going into production was the one that had been tested. And so on.

The rule is simple: create a single binary file that can be accurately identified and passed through all stages of the product release pipeline. All environment-specific features should remain part of the environment. For example, they can be stored in a component container, in a pre-agreed file, or in specific folders.

If during the build of your project there are manipulations with the code or the target environment settings are stored in the code itself, it means the application was not designed well enough: the key functions of the application are not separated from the platform-defined functions. Or worse: the team knows what needs to be done, but does not consider making the necessary changes a high-priority task.

Of course, there are exceptions: sometimes you have to build for several target environment options where resource constraints vary significantly. However, this does not apply to those of us (and most of us) who create applications that simply "send data from the database to the screen and back." Another option is working with poorly written legacy code, where it's too difficult to tidy things up all at once. In such cases, it is advisable to proceed gradually, but start this process as early as possible.

And one more thing: keep runtime environment information in version control, just like the code. There is nothing worse than ruining the environment configuration and not being able to find out what changes were made to it. Environment settings should be stored in a separate repository, as they change at a different pace and for different reasons than the code. Some teams use distributed version control systems (such as Bazaar and Git) for this purpose, as it is easier to save changes made in the production environment to the repository in these systems – and these changes inevitably occur.