

const tweets = [
  { id: 1, text: 'Hello World' },
  { id: 2, text: 'Hello Universe' },
  { id: 3, text: 'Hello Galaxy' },
  ];
  
  
  function doThisOnIncomingData(incomingData, functionToSetOutgoingData) {
    console.log("--------------------------------");
    console.log(incomingData.contentType);
    console.log("--------------------------------");
    const tweet = tweets[incomingData.url.slice(incomingData.url.length-1)];
    console.log("--------------------------------");
    console.log(tweet);
    console.log("--------------------------------");
    functionToSetOutgoingData.end(JSON.stringify(tweet));
  };
  
  
  const http = require('http'); // require is a function that is used to import a module
  const server = http.createServer(doThisOnIncomingData); // create a server and execute the logToConsole function
  server.listen(3000); // listen to port 80