## Solution for so question

https://stackoverflow.com/questions/55481030/express-create-react-app-serving-static-folders-in-directory?noredirect=1#comment97672700_55481030


Express code is in `server/server.js`
Start the express server using `node server/server.js`
if you take a look at `server/server.js` you can find that i've assigned the view to `build` directory that will be generated using `npm run build`.

`npm run build` is to generate prod environment js bundle that was written using `react`

i've already generated the required js bundle with `react-router-dom` and its available in `build` directory. You can just run the program `node server/server.js` and check the output.

See if the output is in the way that you wanted your program to be like.

Let me know if it helps :)
