+++
title='Perspective as seen from 300 meters'
date=2024-09-10T00:00:00-07:00
draft=false
categories=[]
tags=["whenever", "view", "infoviz", "code", "quality", "representations", "metrics", "program", "software"]
cover_image='/images/cover/knoxwelle__2017-01-15T081122.000Z.jpg'
+++
We architects are interested in learning how good the software we are developing is.There is a more subtle internal component to program quality that has to do with the design's clarity, or how simple it is for us to comprehend, support, and grow the software product. The exterior component of program quality is evident: the program must be valuable to the user. Whenever we push for a definition of quality, we ultimately say, "I'll know when I see it." So, what do you think quality is? 
   
Architectural charts use small squares to represent entire systems, and the lines that connect them can indicate any number of things, including shared resources (like a train) or dependencies. 
These diagrams show the system at a 10-kilometer altitude, which is roughly equivalent to how an airplane views the terrain. Compared to the surface view, the only other option is typically the source code. Because one idea is too high and the other is too low, they are unable to communicate any meaningful information about the software product's quality. 
  
The detail overload prevents you from seeing the structure behind it. Observing at a height of 300 meters is obviously not an intermediate choice. 
   
The information in "View from 300 meters" is at an appropriate level. It combines many metrics (number of methods, number of dependents, and cyclomatic complexity) with massive volumes of data. The particular feature of quality will have a major impact on how this is portrayed in reality.It may take the form of a complicated polymetric view that illustrates the relationships between various input values, a histogram that displays metrics at the class level, or a visual representation of a dependency graph. 
  
It is an impossible task to create such representations by hand and maintain them in sync with the program. We require tools that can generate these kinds of representations from the sole trustworthy information source: the source code. Commercial tools are available for some representations, such as a design structure matrix; however, tiny data and metrics extraction tools can be used with popular visualization packages to generate surprisingly simple specialized representations. An easy illustration would be to import a Checkstyle output (really, a collection of metric levels for classes and methods) into a spreadsheet so that charts may be created.With the InfoViz tool, the same metrics may be shown in a TreeMap format.Another great tool for showing graphs with intricate relationships is GraphViz. 
   
The degree of subjective perception of software product quality decreases if an appropriate representation is identified.The product under development can be compared to other comparable systems.Trends can be found by comparing various iterations of a system, and notable departures from the average can be found by comparing representations of various subsystems. We may rely on our visual sense and pattern recognition, even with a single chart. Code arranged into appropriately sized classes can be represented by a series of harmonious rectangles; a well-balanced tree is likely to reflect a successful hierarchy of classes.A fairly basic rule usually applies: everything that appears well-organized is probably well-designed.