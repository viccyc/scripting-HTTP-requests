var https = require('https');

module.exports = function getHTML (options, callback) {
  https.get(options, function (response) {
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
      callback(stringBuffer);
    });
  });

};