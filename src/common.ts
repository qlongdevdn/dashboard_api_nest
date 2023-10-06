/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable  @typescript-eslint/no-unsafe-call */
const APP_SERVER: any = require('quick-local-ip');
const printEnvironment = (envData: object) => {
    console.log('='.repeat(20));
    console.log('Server provided API for Dashboard Systems');
    console.log('*'.repeat(20));

    const appVars = [];
    const values = [];
    for (const envKey in envData) {
        if (envKey.startsWith('APP_')) {
            appVars.push(`${envKey}: ${process.env[envKey] as string}`);
            values.push(process.env[envKey]);
        }
    }

    appVars.sort();
    values.sort();

    for (const appVar of appVars) {
        console.log(appVar);
    }
    console.log(`Server started at http://${APP_SERVER.getLocalIP4()}:${values[0]}/${values[1]}`);
    console.log('='.repeat(20) + '\n');
};

export { printEnvironment };
