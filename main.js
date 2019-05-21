var http = require('http');

var server = http.createServer(function (req, res) {


    var categoria = req.url;

    if (categoria == '/tecnologia') {
        res.end("<html><body>Tecno News</body></html>");
    }else if(categoria == '/moda'){
        res.end("<html><body>Fashion News</body></html>");
    }else{
        res.end("<html><body>Portal de Noticias</body></html>");
    }

});

server.listen(3000);
