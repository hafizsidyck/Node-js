const http = require ('http')
const PORT = 4001
const fs = require ('fs')

// const requestListener = (req, res => {
//     res.writeHead(200);
    

// })

const server = http.createServer(req, res) => {
    if(req.url === '/accueil') {
        res.writeHead(200,
              {"content-type": "text/html"}
            )
            res.end(`<html>
                <body>
                <h1>BOnjour Bootcamp</h1>
                </body>
                </html>`)
    }
    else {
        res.writeHead(404)
        res.end(`La page demandée n'existe pas `)
    }
}
server.listen(PORT, () => {
    console.log('server est démarrer sur http://localhost:4001');
})