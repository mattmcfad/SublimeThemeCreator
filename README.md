# SublimeText3 Theme Creator

## About
App to create custom SublimeText3 Themes

## Technologies
* Angular
* Coffeescript
* Jade
* Stylus
* Grunt
* Bower
* NPM

## Getting Started
1. Install grunt dependencies
```
npm install
```
2. Update package.json
	* Update your Name, Description, Repository, Homepage etc.
3. Familiarize yourself with the file structure
	* Dev
		* Handles all raw files you are developing including Jade, Stylus and multiple JavaScript files
	* Dist
		* Contains files that should be placed on a webserver.
		* All files in this folder have been compiled and concatenated.
4. Running Grunt
	* While developing use
	``` 
	grunt
	```
	* To deploy the server to a live server
	* Note: grunt deploy will minify & uglify your JavaScript which makes debugging difficult :)
	```
	grunt deploy
	```
