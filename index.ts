import figlet from "figlet"
const server =  Bun.serve({
    port: 3000,
    fetch(req){
        const url = new URL(req.url);
        if(url.pathname === '/'){
        const body=  figlet.textSync("video");
        return new Response(body);
        } 
        if(url.pathname === '/about'){
            return new Response('About me!') 
        }
        if(url.pathname === '/greet'){
            return new Response(Bun.file('./dummy.txt'))
        }
        throw new Error('Could not find the page')
    },
    error(error){
        return new Response(`<pre>${error.stack}</pre>`, {
            headers: {
                'Content-Type': 'text/html'
            }
        })
    }
})

console.log(`Listening on port ${server.port}`)