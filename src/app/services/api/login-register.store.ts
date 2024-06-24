import { Injectable } from '@angular/core';
import { LoginCredentials, RegisterCredentials, SubmitUsernameRequest, UpdatePasswordRequest, ValidateGroupCodeRequest } from 'src/app/types/auth.types';
import { LoginRegisterApi } from './login-register.api';
import { Storage } from '@ionic/storage';

@Injectable({providedIn: 'root'})
export class LoginRegisterStore {

	constructor(private api: LoginRegisterApi,  private storage: Storage) {}

  login(credentials: LoginCredentials) {
    return this.api.login(credentials);
  }

  saveUser(tokens, userInfo?) {
    // TODO figure out why only the idToken works to validate with the server, it feels like the access token should be doing that...
    this.storage.set('LIFE_HEALING_TOKEN', tokens.idToken.jwtToken);
    this.storage.set('LIFE_HEALING_USER_ID', tokens.idToken.payload.sub);
    this.storage.set('LIFE_HEALING_GROUPS', tokens.idToken.payload['cognito:groups']);
    if (userInfo) {
      this.storage.set('LIFE_HEALING_USER_NAME', userInfo.username);
    // TODO save the other useful user information (username, etc) to access throughout the app
    }
  }

  register(credentials: RegisterCredentials) {
    return this.api.register(credentials);
  }

  validateGroupCode(validateGroupCodeRequest: ValidateGroupCodeRequest) {
    return this.api.validateGroupCode(validateGroupCodeRequest);
  }

  submitUsername(usernameRequest: SubmitUsernameRequest) {
    return this.api.submitUsername(usernameRequest);
  }

  updatePassword(updatePasswordRequest: UpdatePasswordRequest) {
    return this.api.updatePassword(updatePasswordRequest);
  }

}
