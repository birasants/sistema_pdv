const jwt = require('jsonwebtoken');
const knex = require('../db/conexao')

const auth = async (req, res, next) => {
  const { authorization } = req.headers
  

  if (!authorization) {
    return res.status(401).json({ mensagem: 'Não autorizado.' })
  }

  try {
      const token = authorization.replace('Bearer ', '').trim();

      const { id } = jwt.verify(token, process.env.HASH);

      const usuarioEncontrado = await knex('usuarios').where({ id }).first()

      if(!usuarioEncontrado){
            return res.status(404).json({
              messagem: 'Usuario não encontrado.'
            });
      }

      const { senha, ...usuario } = usuarioEncontrado;

      req.usuario = usuario

      next()

  } catch (error) {
        return res.status(500).json({ 
          mensagem: 'Erro interno do servidor' 
        });
  }
}

module.exports = auth;