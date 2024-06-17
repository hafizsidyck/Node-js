const http = require ('http')
const PORT = 4002
const fs = require ('fs')

const server = http.createServer((req, res) => {
    if (req.url=== '/') {
        res.writeHead(200)
        res.end('page accueil')

        
    }
    else if (req.url === '/contact') {
        res.writeHead(200)
        res.end('page contact')
        


    }
    else if (req.url === '/student') {
        res.writeHead(200,
            {"content-type": "text/html"}
        )
        let html = fs.readFileSync(__dirname + "/student.html", "utf-8")
        res.end(html)
        console.log(__dirname);
    }
    else if (req.url === '/api') {
        res.writeHead(200)
        res.end('page api')
    }
    else {
        res.writeHead(404)
        res.end('page non trouvée')
    }

})

server.listen(PORT,() => {
    console.log(`server demarrer sur http://localhost:${PORT}`);
    })