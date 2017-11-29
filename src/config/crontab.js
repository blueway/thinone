const hostname = require('os').hostname();
module.exports = [{
  interval: '120s',
  immediate: true,
  enable: false,
  handle: () => {
    //do something
  }
}, {
  cron: '0 */1 * * *',
  handle: '/api/test',
  enable: false,
  type: 'all'
}];
