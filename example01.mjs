/**
 * 
 *  process.stdin - readble stream
 * 
 *  process.stdout - writable stream
 * */
// process.stdin.pipe(process.stdout) 


// seding a big file through http response
// import http from 'http'
// import { readFileSync, createReadStream } from 'fs'

// // node -e "process.stdout.write(crypto.randomBytes(1e9))" > big.file
// http.createServer((req, res) => {
//   // const file = readFileSync('big.file') //.toString()
//   // res.write(file)
//   // res.end()

//   createReadStream('big.file')
//     .pipe(res)

// }).listen(3000, () => console.log('running at 3000'))

// creat websocket with bultin net module
import net from 'net'

// read data from socket and write on terminal
net.createServer(socket => socket.pipe(process.stdout)).listen(1338)

// connect to socket on port 1338
// node -e "process.stdin.pipe(require('net').connect(1338))"