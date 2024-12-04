package main

import (
    "net/http"
    "log"
)

func main() {
    // Serve files from the "static" directory
    fileServer := http.FileServer(http.Dir("./webpage/site/dist/"))
    http.Handle("/", fileServer) // Root route serves the index.html

    // Start the server
    log.Println("Server starting on http://localhost:8080")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        log.Fatal("Error starting server:", err)
    }
}
