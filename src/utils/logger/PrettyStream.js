const bunyan = require('bunyan')

module.exports = class PrettyStream {
  write (rec) {
    const msg = `[${rec.time.toISOString()}] ${bunyan.nameFromLevel[rec.level]}: ${rec.tag ? `[${rec.tag}] ` : ''}${rec.msg}`

    if (rec.level >= 50) console.error(msg)
    else console.log(msg)
  }
}
