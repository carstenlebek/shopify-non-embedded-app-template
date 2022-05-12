const localtunnel = require('localtunnel')
const resolve = require('path').resolve
const readFile = require('fs').readFile
const writeFileSync = require('fs').writeFileSync
const envfile = require('envfile')
const chalk = require('chalk')
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

const writeEnvToFile = (
    envVariables) => {
    // get `.env` from path of current directory
    const path = resolve(__dirname, '.env');
    readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const parsedFile = envfile.parse(data);
        envVariables.forEach((envVar) => {
            if (envVar.key && envVar.value) {
                parsedFile[envVar.key] = envVar.value;
            }
        });
        writeFileSync(path, envfile.stringify(parsedFile));
    });
};

async function setHost() {
    const tunnel = await localtunnel({port: 3000, subdomain: process.env.DEV_APP_SUBDOMAIN})
    console.log(chalk.bgGreen.bold('Shopify App Url:'), tunnel.url);
    writeEnvToFile([{key: "HOST", value: tunnel.url}])
    return tunnel.url
}

module.exports = async (phase) => {
    let HOST = process.env.HOST
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        HOST = await setHost()
    }
    /**
     * @type {import('next').NextConfig}
     */
    return {
        reactStrictMode: true,
        /* config options here */
        env: {
            HOST
        }
    }
}