import { Server, Request, ResponseToolkit } from "@hapi/hapi";
import { PORT } from './Config/index'

const init = async () => {
    const server: Server = new Server({
        port: PORT,
        host: 'localhost'
    })

    await server.start();
    console.log(`Server running on : ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1)
})

init();

module.exports = init;