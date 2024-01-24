// npm -global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// npm i nodemon -D (dev dependency)

const { readFile,writeFile } = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8')
        const second = await readFilePromise('./content/second.txt', 'utf8')
        await writeFilePromise(
            './content/result-mind-grenade.txt',
            `THIS IS AWESOME : ${first} ${second}`,
            { flag: 'a' }
        )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()

/* const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, result) => {
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        });  
    });
} */

    
/* getText('./content/first.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err)) */
            
/* const getText = () => {
    readFile('./content/first.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(result)
    });
} */

//getText();