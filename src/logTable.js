import { getDBConnection } from './db.js'

async function viewAllUsers(){
    const db = await getDBConnection();

    try {
        const users = await db.all(`SELECT * FROM users`);
        console.table(users);
    }
    catch(err){
        console.error('Error fetching products:', err.message);
    }
    finally {
    await db.close()
  }
}

async function viewAllConfessions(){
    const db = await getDBConnection();

    try {
        const confessions = await db.all(`SELECT * FROM confessions`);
        console.table(confessions);
    }
    catch(err){
        console.error('Error fetching products:', err.message);
    }
    finally {
    await db.close()
  }
}
viewAllUsers();
//viewAllConfessions();