const con = require('../connect/banco').con;

const create = (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    let data_do_cadastro = req.body.data_do_cadastro;
    let nome = req.body.nome;


    let query = 'INSERT INTO gerenciamento (titulo, descricao, data_do_cadastro, nome) VALUES'
    query += `('${titulo}', '${descricao}', '${data_do_cadastro}', '${nome}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM gerenciamento', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

module.exports = {
    create,
    read
}