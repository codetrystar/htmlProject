var fs = require('fs');

function route(handle,pathname,response){
    console.log('Routing a request for '+pathname);
    if(typeof handle[pathname]==='function'){
        handle[pathname](response);
        //转到handler.js
    }else{
        response.writeHead(200, {
            'Content-type': 'text/html'
        });
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(response);
    }
}

module.exports.route = route;