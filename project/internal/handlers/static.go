package handlers

import (
  "github.com/gin-gonic/gin"
)

// loading the html page
func ServeIndex(c *gin.Context) {
	c.File("./webpage/site/dist/index.html")
}

// ensures all pages load for single page applications, such as react based
func ServeSPA(c *gin.Context) {
	c.File("./webpage/site/dist/index.html")
}
