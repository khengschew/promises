/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var cbs = require('./promiseConstructor.js');
var fs = require('fs');
var Promise = require('bluebird');
var promisificaperexpialidocious = require('./promisification.js');

Promise.promisifyAll(fs);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return cbs.pluckFirstLineFromFileAsync(readFilePath)
    .then((user) => {
      console.log('user:', user);
      return promisificaperexpialidocious.getGitHubProfileAsync(user);
    })
    .then((res) => {
      res = JSON.stringify(res);
      console.log('result:', res);
      fs.writeFile(writeFilePath);
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
