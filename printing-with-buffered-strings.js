// function uses a buffering technique to append each chunk of data
// to a variable as it is received, and then console.log the data once
// all of the data has been received.

function getAndPrintHTML () {

var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

https.get(requestOptions, function (response) {
    var stringBuffer = "";
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

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
  });
}

getAndPrintHTML();
