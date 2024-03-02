package main

import (
	"changeme/backend"
	"context"
	"fmt"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) Signup(payload backend.SignUpPayload) backend.SignupResponse {
	s := backend.Signup(payload)
	return s
}

func (a *App) Login(payload backend.LoginPayload) backend.LoginResponse {
	s := backend.Login(payload)
	return s
}
