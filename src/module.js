console.log('Module.js');

async function start() {
    return await Promise.resolve('async is here!');
}

start().then(console.log);
