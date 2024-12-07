package config

import (
	"encoding/json"
	"os"
  "speechglobal/project/pkg/logging"
)

type Config struct {
  JwtSecret string `json:"jwt_secret"`
}

func GetConfig() (*Config, error){
  logger, err := logging.CreateNewLogger("logs/app.log")	
  if err != nil{
    return nil, err
  }

  // Open the JSON file
	file, err := os.Open("pkg/config/config.json")
	if err != nil {
    logger.Log("Failed to open JSON config file")
    logger.Close()
    return nil, err
  }
	defer file.Close()

  var config Config
	decoder := json.NewDecoder(file)
	if err := decoder.Decode(&config); err != nil {
    logger.Log("Failed to decode JSON from config.")	
    logger.Close() 
    return nil, err
	}
  
  logger.Log("Success fetching config")
  logger.Close()

  return &config, nil
}
