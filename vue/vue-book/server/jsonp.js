let http = require('http');
let url = require('url');
http.createServer(function (req,res) {
  let {query ,pathname} = url.parse(req.url,true);
  if(pathname === '/getUser'){
    let u = JSON.stringify({user:'zfpx'});
    res.end(`${query.cb}(${u})`); // c({})
  }
}).listen(9999);
