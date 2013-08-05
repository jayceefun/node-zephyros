var Api = require('./api'),
    Client = require('./client');

function Zephyros(options){
  this.client = new Client(options);
}

exports = module.exports = Zephyros;

Zephyros.prototype.bind = function( key, modifier ){
  var api = new Api(this.client);
  this.client.listen(0, 'bind', key, modifier).then(api.force.bind(api));
  return api;
};

Zephyros.prototype.api = function(){
  var api = new Api(this.client);
  process.nextTick(api.force.bind(api));
  return api;
};