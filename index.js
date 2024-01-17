const http = require("http");
const hostname = "127.0.0.1";
const port = 8080;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello World\n");
// });
const server = http.createServer((req, res) => {
        res.setHeader("Content-Type", "text/html");
        const url = req.url;

        if(url === "/"){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1 style="color: red">Hello World!</h1>');
            res.write('<p>I wonder what else we can send...</p>');
            res.end();
        }
        else if(url === "/mylinks"){
            res.write('<h1 style="color: red">My Links</h1>');
            res.write('<p>Welcome to My Links page</p>');
            res.end();
        }

        // As I imagined, the page takes very long to load but I was experimenting to see how much load can this node system take. If you wait long enough it renders the whole code. It is interesting that it loads faster in my Firefox than my Chrome. I am looking forward to learn Express and start using html templates
        else if(url === "/shortenurl"){
            const urlShortenerHtml = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script defer type="module" src="app.js"></script>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
                <link href="index.css" rel="stylesheet" type="text/css">
               
                <title>Url Shortener</title>
            </head>
            <body class="bg-secondary-subtle">
                <nav class="navbar navbar-expand-lg bg-primary">
                    <div class="container-fluid">
                      <a class="navbar-brand" href="index.html">URL Shortener</a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                          <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="home.html">Home</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link active" href="shortenlinks.html">Link Shortener</a>
                          </li>            
                        </ul>
                      </div>
                    </div>
                  </nav>
                <main class="row d-flex flex-column flex-nowrap justify-content-center align-items-center mt-4 page-body">
                      <div class="container col-8 d-flex flex-column flex-nowrap justify-content-center align-items-center p-5 g-3 border border-secondary-subtle rounded bg-light-subtle mb-4">
                            <h4 class="heading-link text-center p-3 row">Paste your long URL</h4>
                            <form method="get" class="container form text-center d-flex row flex-column flex-nowrap justify-content-center align-items-center g-3">
                                <input class="urlInputBox form-control form-control-lg col-8" type="url" placeholder="Example: https://long-link-12345-abcdef.com" autofocus>
                                <button class="shortenBtn btn btn-success p-2 col-3" type="submit">Shorten URL</button>
                            </form>
                            
                            <div class="mt-2 container row text-center d-flex flex-column flex-nowrap justify-content-center align-items-center g-3">
                              <h4 class="heading-link">Your short URL:</h4>
                              <div class="input-group">
                                  <span class="input-group-text" id="basic-addon1">
                                    <svg class="copy-to-clipboard" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"></path>
                                    </svg>
                                  </span>
                                  <input readonly="readonly" class="shortened-link form-control form-control-lg col-8" placeholder="Example: https://short.url/ab">
                              </div>        
                      </div>
                    </div>                 
                </main>
                <footer class="bg-body-tertiary text-center text-lg-start page-footer">
                  
                  <div class="text-center p-3 bg-primary">
                   Jose Lopez (CobiDev) © 2024 Copyright:
                    <a class="text-body" href="https://github.com/josecobi">https://github.com/josecobi</a>
                  </div>
                 
                </footer>
            </body>
            </html>`;
            res.write(urlShortenerHtml);
            res.end();
        }

  });

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});