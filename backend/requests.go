package backend

import (
	"bytes"
	"encoding/json"
	"io"
	"net/http"
)

func GetUserByID(id string) {
}

func Signup(payload SignUpPayload) SignupResponse {
	body, err := json.Marshal(payload)
	if err != nil {
		panic(err)
	}
	req, err := http.NewRequest("POST", API_BASE_URI+SIGNUP_URI, bytes.NewBuffer(body))
	if err != nil {
		panic(err)
	}
	buffer, err := io.ReadAll(req.Body)
	if err != nil {
		panic(err)
	}
	var response SignupResponse
	json.Unmarshal(buffer, &response)
	return response
}
