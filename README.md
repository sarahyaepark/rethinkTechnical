# ReThink Technical Challenge

Sarah Park

**Using an `express`/`sequelize` backend and a `react`/`redux` front end boilerplate**

**Problem 2: 60 minutes
You have over a million rows of data. You need to display this data on a web page along with a search field. Update search results with each character entered by the user. Make sure to call out any assumptions and / or limitations in your solution.**

Implementation

* `npm install`
* Create our postgres database (only need to do this once! it works for question 3 too)
```
export searchdata
createdb searchdata
```
* `npm run seed` to get our dummy data
* using node version 12.11.1
* `npm run start-dev`
**open localhost:8080/searchData**

Review

* Should cache results that have been searched before

Main Searching Algorithm:

* Upon page load, we get all the animals in the data base and sort them alphabetically once
* Then, every time the user enters the letter, we use a binary search to search the sorted names in logarithmic time

Limitations

* Small sample test size (1000) with dummy data
* Algorithm still requires the data to be sorted once
* Must call for all data every initial page load because we want to display all results to the user in the prompt

Assumptions

* All data is formatted the same way
* Data only includes first name

**Problem 3: 60 minutes
Given any URL, shorten it and return a globally unique URL back to the user. Make sure to call out any assumptions and / or limitations in your solution.**

Implementation

* `npm install`
* `npm run start-dev`
**open localhost:8080/shortenUrl**

Review

* valid url library checks if the entered url is safe
* prompts user to enter url if they leave the form empty
* returns unique shortened urls

Limitations

* have to use localhost to redirect at the moment

Thank you for your consideration :-)
