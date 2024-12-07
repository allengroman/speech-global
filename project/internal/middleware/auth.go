package middleware

import (
	"net/http"
	"strings"
  "speechglobal/project/pkg/config"
  "speechglobal/project/pkg/logging"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
)

// Secret key (to be initialized from config)
var secretKey []byte

// init() initializes the secretKey from the config
func init() {
	cfg, err := config.GetConfig()
	if err != nil {
		panic("Failed to load configuration: " + err.Error())
	}
	secretKey = []byte(cfg.JwtSecret)
}

// AuthMiddleware validates JWT tokens
func AuthMiddleware(programLogger *logging.Logger) gin.HandlerFunc {
	return func(c *gin.Context) {
		// Get the Authorization header
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" || !strings.HasPrefix(authHeader, "Bearer ") {
      programLogger.Log("Invalid token")
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Missing or invalid Authorization token"}) 		
      c.Abort() // Stop the request here
			return
		}

		// Extract the token part (after "Bearer ")
		tokenString := strings.TrimPrefix(authHeader, "Bearer ")

		// Parse and validate the token
		token, err := jwt.Parse(tokenString, func(t *jwt.Token) (interface{}, error) {
			// Validate the signing method
			if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
        programLogger.Log("Unexpected token")
				return nil, jwt.NewValidationError("unexpected signing method", jwt.ValidationErrorSignatureInvalid)
			}
      programLogger.Log("Unexpected signing method")
			return secretKey, nil
		})

		// Check if the token is valid
		if err != nil || !token.Valid {
      programLogger.Log("Invalid or Expired Token")
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid or expired token"})
			c.Abort()
			return
		}

		// Extract token claims (if needed)
		if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
			c.Set("user_id", claims["user_id"])  // Store user_id in context
      programLogger.Log("Storing token claims for user")	
    } else {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token claims"})
			c.Abort()
			return
		}

		// Proceed to the next middleware or handler
		c.Next()
	}
}
