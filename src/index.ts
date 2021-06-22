import { Server } from "@hapi/hapi";
import { PORT } from './Config/index'
import Buku from './Routes/Buku';

const init = async () => {
    const server: Server = new Server({
        port: PORT,
        host: 'localhost'
    })

    server.route(Buku)

    await server.start();
    console.log(`Server running on : ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1)
})

init();

module.exports = init;