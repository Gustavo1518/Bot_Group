const venom = require('venom-bot');

venom
  .create({
    session: 'session-name', // name of session
    headless: true,
    browserArgs: [
      '--headless=new',
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    console.log(message)
    if (message.body === "Hola" && message.isGroupMsg && message.groupInfo.name === "Test") {
      client
        .sendText(message.from, 'Hola bienvenido al grupo de test')
        .then((result) => {
          console.log('Result: ', result); // return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); // return object error
        });
    }
  });
}
