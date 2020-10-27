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
    if (message.action === 'updateCursor') {
      robot.moveMouse(message.cursor.x, message.cursor.y)

      if (message.cursor.state.mouseDown) {
        robot.mouseClick()
      }
    }
  })

  /**
   * On disconnect
   */
  ws.on('close', () => {
    console.log('...disconnected')
  })
})
