function NoticiasDAO(conn) {
    this._conn = conn;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._conn.query('select * from tb_noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function (objetosQuery, callback) {
    this._conn.query('select * from tb_noticias where id_noticia = ' + objetosQuery.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this._conn.query('insert into tb_noticias set ?', noticia, callback);
}

NoticiasDAO.prototype.getUltimasNoticias = function(callback){
    this._conn.query('select * from tb_noticias order by data_criacao desc limit 5', callback);
}

module.exports = function () {

    return NoticiasDAO;

};


