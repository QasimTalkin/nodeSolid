const tweets = [
  { id: 1, text: 'Hello World' },
  { id: 2, text: 'Hello Universe' },
  { id: 3, text: 'Hello Galaxy' },
  ];
  function doThisOnIncomingData(incomingData, functionToSetOutgoingData) {
    const tweet = tweets[incomingData.url.slice(incomingData.url.length-1)];
    if (!tweet) throw new Error('Tweet not found');
    functionToSetOutgoingData.end(JSON.stringify(tweet));
  }
  const http = require('http'); // require is a function that is used to import a module
  const server = http.createServer();
  server.listen(3000);
  server.on('request', (req, res) => {
    try {
      doThisOnIncomingData(req, res);
    } catch (error) {
      res.statusCode = 500;
      res.end(`${error} |  Something went wrong`);
    }
  });
  
  server.on('clientError', (err, socket) => {
    socket.end(`${error} HTTP/1.1 400 Bad Request\r\n\r\n`);
  });
  
  