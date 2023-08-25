module.exports = function (RED) {
  "use strict";

  function demo(n) {
    RED.nodes.createNode(this,n)
    const node = this

    this.on('input', function (msg,send,done){
      send = send || function() { node.send.apply(node,arguments) }
      msg.foo = 'bar'
      node.send(msg)
      if (done) {
        done()
      }
    })
  }

  RED.nodes.registerType('demo',demo)
}
