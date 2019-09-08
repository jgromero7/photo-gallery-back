import app from './app';
import { startConnection } from './database'

async function main() {
    // Init Connection DB
    startConnection();

    // Init Sever
    await app.listen(app.get('port'))
    console.log('Servern on port:', app.get('port'));
}

main();