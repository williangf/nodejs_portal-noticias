module.exports.form_add_news = function (app, req, res) {

    res.render("admin/form_add_news", {validacao: {}, noticia: {}});

}

module.exports.noticias_salvar = function (app, req, res) {

    var noticia = req.body;

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('noticia', 'Notícia é obrigatório').notEmpty();
    if(!req.assert('data_noticia', 'Data é obrigatória').notEmpty()){
        req.assert('data_noticia', 'Data deve ser válida').isDate({format: 'YYYY-MM-DD'});
    }
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 a 100 caracteres').len(10, 100);

    var erros = req.validationErrors();

    if (erros) {
        //console.log(erros);
        res.render("admin/form_add_news", {validacao: erros, noticia: noticia});
        return;
    }

    var conn = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(conn);

    noticiasModel.salvarNoticia(noticia, function (error, result) {
        res.redirect("/noticias");
    });

}