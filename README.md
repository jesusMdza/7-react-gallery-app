## ReactJS Gallery Application

This SPA (Single Page Application), with the power of React, allows the user to search through Flickr's API for any photo they wish to find. The amount of photos displayed is limited to 24 photos per search. Preset nav links are given as default options to search for. Each photo is displayed in a nice eye appealing masonry grid.

Because this is an app that fetches data which can be prone to errors on flickr's end, user feedback is a must. Error messages are provided to show what went wrong with the user's search (404 error/ Bad search).



### To run app on local machine
  1.  Create a `config.js` file inside src/App.js and provide your flickr api key. To obtain a key, create a flickr account and request a         non-commercial api key. Once obtaining a key, place it inside your `config.js` file. Example below.
  
     const apiKey = 'YOUR API KEY NEEDS TO GO HERE';
     export default apiKey;
     
  2.  run `npm install`
  3.  run `npm start`

To see a live demo without downloading the project files, see this link: https://brave-poincare-eefe40.netlify.com
