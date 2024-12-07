package logging

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

func WebLog(webLogger *Logger) gin.HandlerFunc {
	// Return a middleware function
	return func(c *gin.Context) {
		// Log request details
		webLogger.Log(fmt.Sprintf("Incoming request: %s %s", c.Request.Method, c.Request.URL.Path))

		// Process the request
		c.Next()

		// Log response details
		webLogger.Log(fmt.Sprintf("Response status: %d", c.Writer.Status()))
	}
}
