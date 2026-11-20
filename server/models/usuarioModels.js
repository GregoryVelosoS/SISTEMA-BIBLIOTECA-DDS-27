// IMPORTANDO AS CONFIGURAÇÕES DO BANCO 
const db = require("../config/db.js")

// EXPORTAR AS FUNÇÕES DO MODEL
module.exports = {
    // LOGIN    
    login : () => {
        console.log("LOGIN USUÁRIO FUNCIONANDO");
    },
    // CRUD
    // CREATE
    criarUsuario: async (nome, email, senha, perfil) =>{
        // VARIÁVEL PRA GUARDAR O COMANDO SQL
        const sql = ` INSERT INTO tb_usuarios (nome, email, senha, perfil)
                      VALUES (?, ?, ?, ?)`
        // EXECUTA O SQL
        const [resultado] = await db.execute(sql, [nome, email, senha, perfil])

        // RETORNA PRO CONTROLLER O RESULTADO
        return resultado.insertId
    },
    // READ
    listarUsuarios: async () => {
        // VARIÁVEL PRA GUARDAR O COMANDO SQL
        const sql = `SELECT * FROM tb_usuarios `

        // EXECUTA O SQL
        const [linhas] = await db.execute(sql)

        // RETORNA PRO CONTROLLER O RESULTADO
        return linhas
    },
    // UPDATE
    atualizarUsuario: () =>{
        console.log("ATUALIZEI UM USUÁRIO");
    },
    // DELETE
    deletarUsuario: () => {
        console.log("APAGUEI UM USUÁRIO");
    }
}