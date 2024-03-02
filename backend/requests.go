package backend

import (
	"bytes"
	"encoding/json"
	"io"
	"net/http"
)

func GetUserByID(id string) UserResponse {

	req, _ := http.NewRequest("GET", API_BASE_URI+GET_USER_URI+id, nil)

	res, _ := http.DefaultClient.Do(req)
	buffer, err := io.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}
	var response UserResponse
	json.Unmarshal(buffer, &response)
	response.Status = res.StatusCode

	return response
}

func Signup(payload SignUpPayload) UserResponse {
	body, err := json.Marshal(payload)
	if err != nil {
		panic(err)
	}
	req, err := http.NewRequest("POST", API_BASE_URI+SIGNUP_URI, bytes.NewBuffer(body))
	if err != nil {
		panic(err)
	}
	res, err := http.DefaultClient.Do(req)
	buffer, err := io.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}
	var response UserResponse
	json.Unmarshal(buffer, &response)
	response.Status = res.StatusCode
	return response
}

func Login(payload LoginPayload) LoginResponse {
	body, err := json.Marshal(payload)
	if err != nil {
		panic(err)
	}
	req, _ := http.NewRequest("POST", API_BASE_URI+LOGIN_URI, bytes.NewBuffer(body))
	if err != nil {
		panic(err)
	}
	res, _ := http.DefaultClient.Do(req)
	buffer, err := io.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}
	var response LoginResponse
	json.Unmarshal(buffer, &response)
	response.Status = res.StatusCode

	return response
}
