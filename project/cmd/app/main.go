package main

import (
  "speechglobal/project/internal/server"
  "log"
  "speechglobal/project/pkg/logging"
)

func main(){
  // create general logger for the app
  programLogger, err := logging.CreateNewLogger("logs/app.log")
  if err != nil {
    log.Fatalf("Failed to start the server, error: %v", err)
  }
  defer programLogger.Close()

  programLogger.Log("started program")
  
  // run the webserver
  err = server.Run(*programLogger)
  if err != nil {
    log.Fatalf("Failed to start the server, error: %v", err)
  }
  
  programLogger.Log("end program")
  programLogger.Close()
}
