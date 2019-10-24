const argv = process.argv;
const fs = require("fs");

let path = argv[2];
let fileName = argv[3];

const request = require('request');
request('http://www.example.com', (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  
      // console.log(data);
          fs.writeFile(fileName, body, (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Downloaded and saved " + body.length + " byes to " + fileName);
            }
          });
      }
    )








