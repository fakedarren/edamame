Node CMS
========

An attempt to (sort of) remake a PHP CMS I made about 7 years ago.

Currently I'm refactoring to use Bootstrap, Backbone, RequireJS etc; all responses currently are hard-coded - I've removed
the DB dependencies for now.

My rough plan is as follows:

- Continue to mock up the UI, using dummy responses from the server
- Add an installer, to create the database structure and import initial data
- Re-add database dependencies, make dynamic
- ???
- PROFIT


---------------------------------------


### Installing

npm install fakedarren-nodecms

node app.js

[http://localhost:3000/cms](http://localhost:3000/cms)
