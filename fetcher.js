const fs = require('fs');
const request = require('request');

const webAddress = process.argv[2];
const savedPath = process.argv[3];

request(webAddress, function(error, response, body) {
  console.log(response);
  fs.writeFile(`${savedPath}`, body, function(err) {
    if(!err) {
      console.log(`Download and saved to ${savedPath}`);
    } else {
      throw err;
    }
  });
});