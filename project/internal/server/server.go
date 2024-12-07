package server

import (
  "github.com/gin-gonic/gin"
  "speechglobal/project/internal/handlers"
)

func Run() error {
  r := gin.Default()

  // add middleware here, for auth and custom loggin

  // create file paths and serve static pages
  r.Static("/assets", "./webpage/site/dist/assets")
  r.GET("/", handlers.ServeIndex)
  r.NoRoute(handlers.ServeSPA)
  
  // start server
  return r.Run(":8080")
}
