// config/inserirTimes.js
import conexao from '../database/dbConfig.js'; // Importe sua configuração de conexão com o banco de dados

export async function handleFormSubmit(req, res) {
    const { nome, abreviacao, nTecnico, nTreinador, estrela } = req.body; // Verifique se 'estrela' está sendo enviado corretamente

    const query = `INSERT INTO tblTime (nomeTime, abreviacaoTime, nomeTecnico, nomeTreinador, estrelaTime) VALUES (?, ?, ?, ?, ?)`;
    
    try {
        const conn = await conexao();
        await conn.query(query, [nome, abreviacao, nTecnico, nTreinador, estrela]);
        await conn.end();

        // Redireciona para a página que exibe os times após o cadastro
        res.redirect('/times'); // Certifique-se de que você tenha essa rota configurada
    } catch (error) {
        console.error('Erro ao cadastrar time:', error);
        res.status(500).send('Erro ao cadastrar time');
    }
}
