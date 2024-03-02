package backend

import (
	"time"

	uuid "github.com/satori/go.uuid"
)

type SignUpPayload struct {
	Name        string `json:"name"        binding:"required"`
	LastName    string `json:"lastName"    binding:"required"`
	Password    string `json:"password"    binding:"required"`
	Email       string `json:"email"       binding:"required"`
	PhoneNumber string `json:"phoneNumber" binding:"required"`
	IsDoctor    bool   `json:"isDoctor"`
	IsActive    bool   `json:"isActive"`
	Sex         bool   `json:"sex"`
}

type LoginPayload struct {
	Email    string `json:"email"    binding:"required"`
	Password string `json:"password" binding:"required"`
}

type AppointmentPayload struct {
	Date      time.Time `json:"date"      binding:"required"`
	PatientID uuid.UUID `json:"patientId" binding:"required"`
	DoctorID  uuid.UUID `json:"doctorId"  binding:"required"`
}

type PromptPayload struct {
	Prompt string `json:"prompt" binding:"required"`
}

type SignupResponse struct {
	ID        int       `json:"ID"`
	CreatedAt time.Time `json:"CreatedAt"`
	UpdatedAt time.Time `json:"UpdatedAt"`
	DeletedAt any       `json:"DeletedAt"`
	Patient   struct {
		CreatedAt   time.Time `json:"CreatedAt"`
		UpdatedAt   time.Time `json:"UpdatedAt"`
		DeletedAt   any       `json:"DeletedAt"`
		ID          string    `json:"ID"`
		Email       string    `json:"Email"`
		ProfilePic  string    `json:"ProfilePic"`
		Name        string    `json:"Name"`
		LastName    string    `json:"LastName"`
		PhoneNumber string    `json:"PhoneNumber"`
		Sex         bool      `json:"Sex"`
		IsActive    bool      `json:"IsActive"`
		IsDoctor    bool      `json:"IsDoctor"`
	} `json:"Patient"`
	PatientID        string `json:"PatientID"`
	NatID            string `json:"NatID"`
	BloodGroup       string `json:"BloodGroup"`
	ChronicDisease   string `json:"ChronicDisease"`
	ActiveMedication string `json:"ActiveMedication"`
}
