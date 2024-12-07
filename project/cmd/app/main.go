package main

import (
  "speechglobal/project/internal/server"
  "log"
)

func main(){
  err := server.Run()
  if err != nil {
    log.Fatalf("Failed to start the server, error: %v", err)
  }
}
