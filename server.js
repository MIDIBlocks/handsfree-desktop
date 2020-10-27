const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8081 })
const robot = require('robotjs')

wss.on('connection', (ws) => {
  console.log('connected...')
  
  /**
   * On message received
   */
  ws.on('message', (message) => {
    message = JSON.parse(message)
    if (!message.handsfree) return
    
    // Move cursor
    if (message.action === 'move') {
      robot.moveMouse(message.data.pointer.x, message.data.pointer.y)
    }

    // Click
    if (message.action === 'click') {
      robot.mouseClick()
    }
  })

  /**
   * On disconnect
   */
  ws.on('close', () => {
    console.log('...disconnected')
  })
})
