import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiURL } from 'src/environments/environment';
import { Observable } from 'rxjs';
import * as authTypes from 'src/app/types/auth.types';

@Injectable()
export class LoginRegisterApi {

  // TODO the api should check if we are on network or not and fetch from the appropriate location.
	constructor(private http: HttpClient) {}

  login(credentials: authTypes.LoginCredentials): Observable<any> {
    return this.http.post<any>(`${apiURL}/auth/login`, credentials);
  }

  // TODO add register
  register(credentials: authTypes.RegisterCredentials): Observable<any> {
    return this.http.post<any>(`${apiURL}/auth/register`, credentials);
  }

  submitUsername(usernameRequest: authTypes.SubmitUsernameRequest) {
    return this.http.post<any>(`${apiURL}/auth/submit-username`, usernameRequest);
  }

  validateGroupCode(validateGroupCodeRequest: authTypes.ValidateGroupCodeRequest) {
    return this.http.post<any>(`${apiURL}/auth/validate-group-code`, validateGroupCodeRequest);
  }

  updatePassword(updatePasswordRequest: authTypes.UpdatePasswordRequest) {
    return this.http.post(`${apiURL}/auth/update-password`, updatePasswordRequest, {responseType: 'text'});
  }

  getGroupNameByCode(code: string) {
    return this.http.post(`${apiURL}/groups/code`, code);
  }

  addUserToGroup(addUserRequest: authTypes.AddUserToGroupRequest) {
    return this.http.post(`${apiURL}/groups/add-user-to-group`, addUserRequest);
  }

  getReleaseBold() {
    return this.http.get(`${apiURL}/auth/release-bold`);
  }

  getReleaseBody() {
    return this.http.get(`${apiURL}/auth/release-body`);
  }

  getReleaseHeader() {
    return this.http.get(`${apiURL}/auth/release-header`);
  }


}
