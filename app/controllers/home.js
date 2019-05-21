module.exports.index = function(app, req, res){
    
    var conn = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(conn);
    
    noticiasModel.getUltimasNoticias(function(error, result){
        
        res.render("home/index", {noticias: result});
    });
    
    
    
}