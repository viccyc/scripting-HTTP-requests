// The function definition will now accept a callback as a second parameter.
// The function body will invoke (call) the callback when the data is
// fully received,
function getHTML (options, callback) {
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
      printHTML(stringBuffer);
    });
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML();