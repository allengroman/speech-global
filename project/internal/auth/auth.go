package auth

import (
	"time"
	"github.com/golang-jwt/jwt/v4"
	"speechglobal/project/pkg/config"
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

// GenerateJWT generates a JWT token for a user
func GenerateJWT(userID int, username string) (string, error) {
	// Define token claims
	claims := jwt.MapClaims{
		"user_id":  userID,
		"exp":      time.Now().Add(time.Hour * 24).Unix(), // Token expires in 24 hours
	}

	// Create the token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// Sign the token with the secret key
	return token.SignedString(secretKey)
}
