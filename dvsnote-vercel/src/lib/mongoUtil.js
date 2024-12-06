// mongoUtil.js
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DB_URI);

let dbConnection;

export async function connectToDatabase() {
    if (!dbConnection) {
        const clientConnection = await client.connect();
        dbConnection = clientConnection.db('DVSDB');
    }
    return dbConnection;
}


export default connectToDatabase;
