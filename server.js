const http = require('http');
const application = require('./application');
const constantes = require('../library/constantes');
const multicastRecver = require('../library/multicastRecver');
const regsitryMgr = require('../library/registryMgr');
const port = process.env.PORT || 0;

const server = http.createServer(application);
server.listen(port, function () {
  var host = constantes.getServerIpAddress();
  var port = server.address().port
  var intervalObj = setInterval(() => {
    let AFORegisteryUrl = regMgr.getList();
    if (0 !== AFORegisteryUrl.length) {
      constantes.declareService(AFORegisteryUrl, constantes.MSTypeEnum.afoEvents, host, port, constantes.MSPathnameEnum.afoEvents);
    }
  }, 10000);
  console.log("EventsSrv listening at http://%s:%s", host, port)

});

const regMgr = new regsitryMgr();
const mcRecver = new multicastRecver(constantes.getServerIpAddress(), constantes.MCastAppPort, constantes.MCastAppAddr, (address, port, message) => {
  console.log('AFOEvents : MCast Msg: From: ' + address + ':' + port + ' - ' + JSON.stringify(message));
  if (message.type === constantes.MSMessageTypeEnum.regAnnonce) {
    regMgr.add(message.host, message.port);
  }
});

console.log('EventsSrv RESTful API server started on: ' + port);
