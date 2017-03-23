//require http and readFile
const { get } = require('http')
// use 'get'
const { readFile } = require('fs')
// use readFile to get file

//make get request
// pass API, callback the type of content (content-type)
get('http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters=%7B%22Normalized%22%3Afalse%2C%22NumberOfDays%22%3A365%2C%22DataPeriod%22%3A%22Day%22%2C%22Elements%22%3A%5B%7B%22Symbol%22%3A%22AAPL%22%2C%22Type%22%3A%22price%22%2C%22Params%22%3A%5B%22c%22%5D%7D%5D%7D', (res) => {
  const statusCode = res.statusCode;
  const contentType  = res.headers['content-type'];

let error = null;
// if there is no
if(statusCode === 200) {
  error = new Error(`blah.\n` + `Status Code: ${statusCode}`);
} else if (!/^application\/json/.test(contentType)) {
  error = new Error(`blah blah.\n` + `expected application/json but got ${contentType}`);
}
if (error) {
  console.log(error.message);
  res.resume();
  return;
}

let body = '';
res.on('data', (buff) => {
  console.log("status?", res.statusCode)
  body += buff.toString()
 });
res.on('end', () => {
  try {
    let parsedData = JSON.parse(body);
    console.log(parsedData)
  } catch (e) {
      console.log(error.message)
  }
 });
})
