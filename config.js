const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUSY7bRhS9ilFbqS1OEkUBDYSkJkoUNVND7EWRLJHVHMUqUqIaDXgTJBsD3ie+QHYJfInkFkZ2WfkIAVsS2gZip1Ob+qjh1av/33/3IIoxQUNUgNY9SFKcQ4rKkBYJAi2gZLsdSkEVOJBC0AJCb6goY13oDpuaLfueslsv+OZ6YAX0xHUNUyqYfM7McsSMbsFDFSSZFWD7G4Aen8Bsu1FW/Ib39TgThEHfNnTH18fh6sgbEz8/zJhaT+NKwBIR4hRHbifxUIhSGAxRMYE4fR79udzvFYFmRjXlwLuNzV5TZR4yi02/clr4ie8P0XobL2vtbvN59He5O1Jlj59tyIJjFHIyXCjHobAZmQv1jpfmMVolqLYcyPKZPsFuhBzNQRHFtHh23l09XQa1cHdyQnOMJC1HUY+Pj711zZjvfb5wtKSOjMBgVtrziB/qYZGNeDs67vAy3zbEUddSfT/yhBHBA9YpWNsvQiW1Tl8Qn6RXrfj/J+9NAw/2UA+Z+dqVdHZb45SmOZulddkQttZOtBc0nXLD3FzLz6N/p3VHs5A2NjnUnMjL91Y4rhj8VvMSlESaJ+qmEmriauAJT/QhzdJvsVS2k8HCGLNFSLaDfYSWi+XB6XUca2I3Es7fsPs9MxsWsTBPu5M6Rnd4EbB7pTJFAjoa3X2hYnvv676KKpjjVJIxVq7It48/8lGhOaDFPlRBilxMaAopjqPHtYZUBdDJ58hOEX1MLzAPs54uOYstZVKHJFgY71VJypDCkLGzUJp44HRthOoULW9BFSRpbCNCkNPHhMZpMUKEQBcR0Pr+dRVE6EjPhSuf49kq2OGU0GWUJUEMnWtVr5vQtuMsovMistUyQCloMU/LiFIcuaTMYxbB1PZwjlQPUgJaOxgQ9FAFDsqxjUo8UBTmnKVZb7prWGaf9iOG3URySdmLo/MRh+PZBqyLNyy0mBvBcdgbiBzhxm7yjAjtBsuJTVAF+NIz5Z2vCw3vc22QYg25zfoUFeHcZXI4gu7s3NDn3KMUOaBF0wxVgQVtP0sWsY+ib+Bq9aOIXPt0J4gb0zb7JDyGx/HS7VPyGe65pqB1/+RTauyUeOakL7TNkQqqIHyUIC5/Lgkix4iSKLH1Fi98R14eyjzCJHkZIQqqIILlYfDp/bufXnx6/+7Nxw9vX/z15vcXr6JX0ccPb8upDN6cg79/+e268vM1+PEc/Hk58sXFP369zB+uGz+UX7nUuSTpIApxQEALqBNuFW+nascYZpxOej05dmXVLQt51cW1wc4C3sH8aHXGJ4ObmrTt5luzk5l8p1urk0XKbSyVb4trLzVObf/2X0BAC/jSol7Let2T36xDcTRy9b3v9tyBm8oZ8t2GIhWsR1f1wEqbC7PNe7VmoAvylA4zjx5s18YUafldg6Ag8VQ+w5SptN3b8rWzPj9/bLTjQyj1m0LfbgS1U1Db212jIvXsBmNV7o7hdD8/6Gxt2IVt2BRrOmxz5Bhmxk72R65/HGOzI1mbXlghJ7m71XyD3Yeye279R+sJLpaPH5vy/qLmHUaPDnop9H/p4amvmIfqZxAXS/6ara25tLk6tsnJ8bvWVNA5c6YHzlHZVaxOQwp7B3qosAI82Yc6eHh4XQVJAOkuTkPQAiS0IKiCABIqP/nCAoeIUBgmoMWKfF2UOEFsVkFYyEkyp5Be7QTI5ehJInj4B/S0/8VqCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

