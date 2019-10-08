Project: 
ReactJS Gallery Application

This SPA (Single Page Application), with the power of React, allows the user to search through Flickr's API for any photo they wish to find. The amount of photos displayed is limited to 24 photos per search. Preset nav links are given as default options to search for. Each photo is displayed in a nice eye appealing masonry grid.

Because this is an app that fetches data which can be prone to errors on flickr's end, user feedback is a must. Error messages are provided to show what went wrong with the user's search (404 error/ Bad search).


When you want to run this app after downloading the project files, there are 2 things you must do:
  1.  Create a config.js file a place inside src/App.js

     ```javascript
     const apiKey = 'your api key here';
     export default apiKey;
     ```
  2.  install modules with 'npm install'

To see a live demo without downloading the project files, see this link: https://brave-poincare-eefe40.netlify.com
