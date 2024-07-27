
var http = require('http');
var url = require('url');

var getRoot = require('./rootModule');
var getAbout = require('./aboutModule');
var getContact = require('./contactModule');

const name = 'John Smith';

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    let content;
    res.writeHeader('Content-Type', 'text/html');

    if (path === '/') 
    {
        content = `${getRoot(name)}`;
        res.statusCode = 200;
    } 
    else if (path === '/about') 
    {
        content = `${getAbout(name)}`;
        res.statusCode = 200;
    } 
    else if (path === '/contact') 
    {
        content = `${getContact(name)}`;
        res.statusCode = 200;
    } 
    else if (path === '/gallery') 
    {
        content = `<h1>This is the gallery page</h1>`;
        res.statusCode = 200;
    } 
    else 
    {
        content = `<p>Invalid Request</p>`;
        res.statusCode = 404;
    }

    res.end(content);
});

server.listen(5000);

/*

Jimwell Manalo
July 27, 2024
WD-301

*/
