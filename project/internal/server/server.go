package server

import (
  "github.com/gin-gonic/gin"
  "speechglobal/project/internal/handlers"
  "speechglobal/project/pkg/logging"
  "fmt"
  "speechglobal/project/internal/middleware"
)

func Run(programLogger logging.Logger) error { 
  // create web logger
  webLogger, err := logging.CreateNewLogger("logs/webserver.log")
  if err != nil{
    programLogger.Log(fmt.Sprintf("Error creating web logger: %v", err))
    return err
  }
  defer webLogger.Close()
  
  // create router
  r := gin.Default()

	// Specify trusted proxies
	err = r.SetTrustedProxies([]string{"127.0.0.1"}) // Nginx on localhost
	if err != nil {
		programLogger.Log(fmt.Sprintf("Failed to set trusted proxies: %v", err))
	}

  // add middleware here, for auth and custom loggin
  r.Use(logging.WebLog(webLogger)) 

  // create file paths and serve static pages
  r.Static("/assets", "./webpage/site/dist/assets")
  r.GET("/", handlers.ServeIndex)
  r.NoRoute(handlers.ServeSPA)

  // add groups to blanket with auth protection
  users := r.Group("/users")
  users.Use(middleware.AuthMiddleware(&programLogger))
  {}

  channel := r.Group("/channel")
  channel.Use(middleware.AuthMiddleware(&programLogger))
  {}

  // start server
  return r.Run(":8080")
}
