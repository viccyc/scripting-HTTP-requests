// accepts a paramater, options, which is an object that contains values
// for the host and path, exactly like requestOptions.
function getAndPrintHTML (options) {
var https = require('https');

  https.get(requestOptions, function (response) {
    var stringBuffer = "";
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    response.on('error', function (err) {
      console.log("Error: ", err);
    });

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      stringBuffer += data + '\n';
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log("stringBuffer: ", stringBuffer);
      console.log('Response stream complete.');
    });
  });  /* Add your code here */

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML();