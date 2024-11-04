// NÃO FUNCIONOU !!!!!
// database/dbConfig.js

import sql from 'mssql';

const config = {
    user: '', // Deixe vazio se não houver senha
    password: '', // Deixe vazio se não houver senha
    server: 'localhost\\sqlserver2022', // Tente usar localhost
    database: 'ViBraFut',
    port: 1433, // Se necessário
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

async function conexao() {
    try {
        const pool = await sql.connect(config);
        return pool;
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados', err);
    }
}

export default conexao; // Exporte a função de conexão
