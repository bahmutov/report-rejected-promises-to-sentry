'use strict'

function isError (x) {
  return x instanceof Error
}

function toMessage (x) {
  return isError(x) ? x.message : x
}

function toStack (x) {
  return isError(x) && x.stack
}

function reportUnhandledRejections (client) {
  process.on('unhandledRejection', (why) => {
    const reason = toMessage(why)
    console.error(`Unhandled rejection: ${reason}`)

    const err = new Error('Unhandled promise rejection')
    const extra = {reason}
    const stack = toStack(why)
    if (stack) {
      extra.stack = stack
      console.error(stack)
    }
    client.captureException(err, {extra})
  })
}

module.exports = reportUnhandledRejections
