package logging

import (
	"fmt"
	"os"
	"time"
)

// Logger struct for managing log files
type Logger struct {
	logFile *os.File
}

// CreateNewLogger creates a new logger instance with a specified file
func CreateNewLogger(logFileName string) (*Logger, error) {
	// Open the log file
	logFile, err := os.OpenFile(logFileName, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		return nil, fmt.Errorf("Error opening log file: %v", err)
	}

	// Create the logger
	logger := Logger{logFile: logFile}

	// Return the logger
	return &logger, nil
}

// Log writes a log message with a timestamp to the file
func (l *Logger) Log(message string) {
	timestamp := time.Now().Format("2006-01-02 15:04:05")
	logMessage := fmt.Sprintf("[%s] %s\n", timestamp, message)
	fmt.Fprint(l.logFile, logMessage)
}

// Close closes the log file
func (l *Logger) Close() error {
	return l.logFile.Close()
}
