const http = require ('http')
const PORT = 4000
const host = "localhost"

const  requestListener = (req, res) => {
    res.writeHead(200);
    res.end(`<html>
        <body>
        <h1>Bonjour Bootcamp! Comment trouvez vous Node JS ?</h1>
        </body>
        </html>`)
}


const server = http.createServer(requestListener)
server.listen(PORT, host, () => {
    console.log('tous vas bien');
})
