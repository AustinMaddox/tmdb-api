/*
In Express, 404 responses are not the result of an error, so the error-handler middleware will not capture them. 
This behavior is because a 404 response simply indicates the absence of additional work to do; in other words, Express has executed all middleware functions and routes, and found that none of them responded. 
All you need to do is add a middleware function at the very bottom of the stack (below all other functions) to handle a 404 response:
*/
const handler = (req, res) => {
  let statusCode = 404;
  res.status(statusCode);
  res.json({ description: "Not Found" });
};

module.exports = handler;
