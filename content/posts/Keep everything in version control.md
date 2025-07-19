+++
title='Keep everything in version control'
date=2025-07-10T00:00:00-07:00
draft=false
categories=[]
tags=["store", "subversion", "git", "mercurial", "cvs", "life", "version", "project", "code", "repository", "system"]
cover_image='/images/cover/knoxwelle__2017-05-03T170456.000Z.jpg'
+++
Store everything related to any of your projects in a version control system. The necessary resources are already available: free tools like Subversion, Git, Mercurial, and CVS, ample disk space, cheap and powerful servers, ubiquitous Internet access, and even project hosting services. Once you have installed the version control system, saving your work in the repository is very simple: just execute the corresponding command in the clean directory with the code. And you only need to master two new basic operations: committing (commit) changes you made in the code to the repository, and updating (update) your working version of the project to the one in the repository.

Once the project is placed in the version control system, you can easily view its history, find out who wrote each piece of code, and refer to a specific version of a file or project using a unique identifier. And more importantly, now you can make risky changes to the code, and there's no need to leave commented-out code in case it might be needed in the future. After all, the old version is securely stored in the repository. You can (and should) tag stable versions with names that are understandable to you, so that you can quickly retrieve the exact version that is working for your client. You can create separate branches and develop them in parallel: in most projects, there is an actively developed branch and one or more branches of earlier versions that are actively supported.

Version control systems minimize friction between developers. When programmers work on independent parts of the software, their integration goes "smoothly." When they simultaneously modify the same files, the system will notify them and allow conflicts to be resolved. The system can be configured to notify all developers of every change made, giving everyone a general overview of the project's progress.

When organizing work on a project, don't be stingy: put everything related to the project into the version control system. In addition to the source code, include documentation, tools, build scripts, test scenario descriptions, graphic materials, and even libraries in the repository. When the entire project is securely placed in a repository (which is regularly backed up), the potential damage from disk or data loss becomes minimal. To start development on a new machine, it is sufficient to check out a copy of the project from the repository. This simplifies the distribution, compilation, and testing of code on different platforms: on any machine, a single update command guarantees you the latest version of the software.

After you appreciate the benefits of working with a version control system, take a look at the following rules that will make your work and your team's work even more efficient:

- Save each logical change as a separate operation. If you combine a large batch of changes into one commit, it will be difficult to separate them later. This is especially important when refactoring or changing the style across the entire project, which can easily obscure other modifications.

- Accompany each change with an explanatory message. At the very least, briefly describe what you changed. And if you need to keep the reasons for the changes for the future, there's no better place to do it.

- Finally, you shouldn't save code in the repository that breaks the project's build, otherwise you'll quickly incur the displeasure of other project members.

Life with a version control system is too pleasant to spoil it with easily avoidable mistakes.