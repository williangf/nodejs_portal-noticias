module.exports.noticias = function (app, req, res) {

    var conn = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(conn);

    noticiasModel.getNoticias(function (error, result) {
        res.render("noticias/noticias", {noticias: result});
    });

}

module.exports.noticia = function (app, req, res) {

    var conn = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(conn);
    
    var objetosQuery = req.query;


    noticiasModel.getNoticia(objetosQuery, function (error, result) {
        res.render("noticias/noticia", {noticia: result});
    });

}




