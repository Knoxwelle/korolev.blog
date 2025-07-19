+++
title='Message passing improves the scalability of parallel systems'
date=2025-05-08T00:00:00-07:00
draft=false
categories=["erlang", "c", "c++", "java", "python", "groovy"]
tags=["performance", "c++", "java", "python", "groovy", "memory", "systems", "system", "processes", "data"]
cover_image='/images/cover/knoxwelle__2020-01-08T061804.000Z.jpg'
+++
Already in the first lectures on computer science, programmers are taught that concurrent computing – and especially parallel computing as a special subtype of concurrent computing – is a difficult task, and that only the best have a hope of coping with it, and that even the best do not manage to do so. Great attention is invariably paid to threads, semaphores, monitors, and the difficulties of organizing thread safety with simultaneous access to variables.

There are indeed many complex problems here, and solving them can be very difficult. But what is the root of the problems? Shared memory. Almost all the problems of concurrent computing that we constantly hear about are related to shared memory with mutable data: race conditions, deadlocks, livelocks, and so on. It seems the answer is obvious: forget about concurrency or stay away from shared memory!

Abandoning concurrency is almost certainly not an option. The number of cores in computers is increasing almost every quarter, so achieving true parallelism is becoming increasingly important. We can no longer rely on the continuous growth of processor clock speeds as the basis for application performance. Performance can only increase through parallelism. Of course, one could not care about application performance, but that is hardly likely to please users.

So, is it possible to give up collective memory? Definitely, yes.

Instead of threads and shared memory, one can use processes and message passing. By a process here, we mean a protected independent state of executing code, and not necessarily an operating system process. Languages like Erlang (and before it, occam) have shown that processes are a very successful mechanism for programming concurrent and parallel systems. In such systems, there are fewer synchronization problems than in multithreaded systems with shared memory. Moreover, there is a formal model of communicating sequential processes (CSP) that can be applied in the development of such systems.

You can go further and organize the computations in the form of a dataflow system. In such a system, there is no explicitly programmed control flow. Instead, a directed graph of operators connected by data transfer paths is created, and then data is fed into the system. The control of computations is carried out based on the readiness of data within the system. And no synchronization issues.

At the same time, for system development, languages such as C, C++, Java, Python, and Groovy are mainly used, which programmers are told are intended for developing multithreaded systems with shared memory. What to do? The solution is to use – or create, if they do not exist – libraries and environments that offer process and message-passing schemes that completely eliminate the use of shared mutable memory.

Ultimately, the abandonment of shared memory in favor of message passing will likely become the most successful method for implementing systems that effectively utilize parallelism, which has now become ubiquitous in computer hardware. It turns out to be interesting – processes as a unit of concurrent execution appeared before threads, but in the future, it seems that threads will be used to implement processes.