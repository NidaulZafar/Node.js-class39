
/**
 * 2. Authentication
 * 
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */

import fetch from 'node-fetch';
const url = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';
async function printBooks() {
  const resp = await fetch(url, {
    headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' }
  });
  console.log(resp)
}

printBooks();