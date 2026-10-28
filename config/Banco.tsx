//SDK EXPO SQLITE
import * as SQLite from 'expo-sqlite'


//=================================== CRIANDO O BANCO CASO NÃO EXISTA ========================================
//const db = await SQLite.openDatabaseAsync('pam1_2026')

async function Banco() {
    try{
        //criar o banco caso nao exista
        const db = await SQLite.openDatabaseAsync('pam1_2026');
         console.log('Banco aberto');
        return db;

    } catch (error) {
        console.log('error')
    }
}

//=============================== CRIANDO UMA tabela ========================================
async function createTable(db:SQLite.SQLiteDatabase) {
    try {
        await db.execAsync(`
            PRAGMA journal_mode = WAL; //
            CREATE TABLE IF NOT EXIST USUARIO(
                ID_US INTERGER PRIMARY KEY AUTOINCREMENT,
                NOME_US VARCHAR (100),
                EMAIL_US VARCHAR (100)
            );
            
        `)
        console.log('Tabela usuario criada!!!!')

    } catch (error){
        console.log('Erro ao criar tabela', error)
    }
}

//=============================== CRIANDO UMA FUNÇÃO ========================================


//exporta as funcoes 
export { Banco, createTable};





