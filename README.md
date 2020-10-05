# ReThink Technical Challenge

Sarah Park

Using an `express`/`sequelize` backend and a `react`/`redux` front end

Problem: 60 minutes
You have over a million rows of data. You need to display this data on a web page along with a search field. Update search results with each character entered by the user. Make sure to call out any assumptions and / or limitations in your solution.

Implementation

* npm install
* npm run start-dev
* open localhost:8080/searchData

Review

* Want to add CSS if more time
* Should cache results that have been searched before
* Implement pagination if data size is over 20

Limitations

* Small sample test size with dummy data
* Using filter each time user types can get extremely slow with 1 million rows of data
  * Possible fix: implement sort algorithm that stores data alphabetically --> can then search logarithmically which is much faster

Assumptions

* All data is formatted the same way
* Data only includes first name
