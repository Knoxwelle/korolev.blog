+++
title='Do not repeat your code'
date=2024-04-02T00:00:00-07:00
draft=false
categories=["dry", "method"]
tags=["code", "repetition", "abstract", "strategy", "dry", "open", "closed principle", "srp", "principle", "software", "logic", "duplication"]
cover_image='/images/cover/knoxwelle__2017-07-25T114226.000Z.jpg'
+++
"Don't Repeat Yourself (DRY)" is probably one of the most important principles of programming, and it underlies many other well-known correct approaches and design patterns in software development. A developer who has learned to recognize duplication and can eliminate it using appropriate techniques and suitable abstraction is capable of writing much clearer code than one who constantly clutters the application with unnecessary repetitions.

# Code duplication is ballast

Every line of application code requires maintenance, and it serves as a source of potential errors in the future. Duplication leads to unnecessary
increased code volume, which raises the likelihood of errors and makes the system overly complex. Increased system volume due to duplication,
firstly, it prevents developers from fully understanding the system, and secondly, it does not guarantee that changes made in one place do not
It will be necessary to repeat it in other places where this logic is duplicated. The principle
DRY requires that "every piece of information has a single, unambiguous, and authoritative representation within a system."

# Repetition in processes indicates the need for automation

Many processes in software development are repeatedly performed and easily automated. The DRY principle applies both to the application's source code and in similar contexts. Manual testing is slow, prone to errors, and difficult to repeat, so automated test suites should be used whenever possible. (test suites). Manually integrating the application is time-consuming and error-prone, so the build process should be performed as often as possible—preferably after each code commit to the repository. Where there are labor-intensive manual processes that can be automated, they need to be automated and standardized. The goal is to ensure there is a single way to solve the task and make it as labor-efficient as possible.

# Repetition in logic indicates the need for abstraction

Repetitions in logic come in different forms. Cases of copying and pasting if-then and switch-case constructs are very easy to detect and fix. 
Many design patterns are explicitly aimed at reducing or eliminating logic duplication in an application. If an object requires certain actions to be performed before it can be used, it is useful to apply the Abstract Factory or Factory Method pattern. If an object has many different behavior options, it is useful to organize them using the Strategy pattern rather than large if-then structures. In fact, the very creation of design patterns is an attempt to reduce the expenditure of effort spent on solving standard problems and discussing them. Moreover, applying the DRY principle to structures such as database schemas leads to normalization.

# Matter of Principle

Other software principles are also related to DRY. The principle of "Once and Only Once," which applies only to the functional behavior of code, can be considered a subset of DRY. 
The Open/Closed Principle, which states that "software entities should be open for extension but closed for modification," only works in practice when the DRY principle is followed. Similarly, the well-known "Single Responsibility Principle" (SRP), which requires that a class have only one reason to change, is based on DRY.
If the DRY principle is applied to structure, logic, process, or function, it serves as a fundamental guideline for software developers and contributes to the creation of simpler, easier to maintain, and higher quality software. But although there are situations where repetition is necessary to achieve the desired performance or meet other requirements (for example, data denormalization in a database), repetition should only be applied to solve real, not imaginary, problems.