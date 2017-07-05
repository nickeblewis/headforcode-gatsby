---
title: Hello HTTP
layout: Doc
menuText: Test
---

# How to build your first NodeJS Server

Now we move onto something a little more advanced, as we take a look at how we can use HTTP in our Node application.

So let's cd into the proj folder as we did before and this time, create a folder called 'hello-http' and then create a file 
within that which will contain our code. So follow the steps below:

```bash
$ cd ~/proj
$ mkdir hello-http
$ cd hello-http
$ touch hello.js
$ code hello.js
```

Now Visual Studio Code is open and ready for business, copy and paste the code below into the hello.js file, then save it.

```javascript
// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
```

Now let's run this and see what happens.

```bash
$ node hello
```

You should see a message appear on the console saying "Server running at http://127.0.0.1:8000/" and if you now open up a 
browser and type in the address "localhost:8000" and hit Enter, you should see that it displays:

"Hello World"

You can stop the process by switching back to the terminal window and press "CTRL and C" simultaneously.