## Inspiration
With the recent storms and high winds in our home city, Ottawa, our team decided on a datavisualization project to raise awareness about the force of nature. Every year, thousands of people are affected by natural disasters, but it can be difficult to fully grasp the scope of the destruction. Glob.ill is designed to overcome this issue and demonstrates the global impact of the ill effects. Additionally, many of our chosen disasters are connected with climate change, an effect that’s very real and all should pay mind to. Thus, our project's purpose is two fold: to visualize the scope of natural disasters and draw attention to climate change.

## What it does
By aggregating information from multiple datasets, we were able to compile tens of thousands of various forest fires, earthquakes, and tornados. Globe.ill displays the severity and location of these events on the surfaces of three globes. The tornado globe displays all F4 and F5 scale tornadoes in the United States since 1950. The forest fire globe displays all 500+ hectare fires in Canada and uses the height of each column to show the size of the fires. Finally, the earthquake globe shows all of the magnitude 8 and above earthquakes since 1940, with the diameter of each ring corresponding to the magnitude of the earthquake. Additionally, each globe is equipped with a slider that visitors can use to select which years of data they would like to have visible.

## How we built it
The project was built using react.js and various libraries such as Material-UI, Bootstrap, react-globe.gl, react-icons, react-router-dom, etc. The entire webpage is run through React, which displays all front end features, such as website descriptions and globe visualizations, while also handling all backend data processing. 
Speaking of data, we used forest fire data from Amberwatch, tornado data from the NOAA storm events database, and earthquake data from the USGS earthquake catalog.

## Challenges we ran into
This project posed many issues that we had to work through. For one, our team consists of mostly first time hackers and it took some time for us to streamline our workflow. While using the react-globe.gl library, it took a while for us to figure out the various animations as the format for some specifications are very confusing; however, the greatest problem that we faced was finding suitable datasets. Some datasets were simply too small, too localized, or too outdated. In fact, we couldn’t find tornado or forest fire data for the entire globe.

## Accomplishments that we're proud of
As a group of mostly beginner hackers, we are very proud of what we have accomplished in just a little over 24 hours. We even got a bump map working on the globe for more realistic light rendering effects!

## What we learned
Throughout this experience, we have learned many lessons in not only web development, but in collaboration and problem-solving. We realized that not only did we improve our abilities of effectively communicating and distributing tasks among our team, we also became better at working together to solve problems. Ultimately, Tech Optimum gave us an opportunity to earn valuable experience in project development, which can be used in our futures in this field. 

## What's next for Glob.ill
The next step for Glob.ill is to add even more data, especially pertaining to forest fires and tornadoes. Using which, we would be able to apply much more advanced analytics to work towards a better understanding of the impact of climate change.
