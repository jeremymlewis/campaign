// import { Injectable } from '@angular/core';
// import { LoginCredentials, RegisterCredentials, SubmitUsernameRequest, UpdatePasswordRequest, ValidateGroupCodeRequest } from 'src/app/types/auth.types';
// import { LoginRegisterApi } from './login-register.api';
// import { Storage } from '@ionic/storage';

// @Injectable({providedIn: 'root'})
// export class LoginRegisterStore {

// 	constructor(private api: LoginRegisterApi,  private storage: Storage) {}

//   login(credentials: LoginCredentials) {
//     return this.api.login(credentials);
//   }

//   saveUser(tokens, userInfo?) {
//     // TODO figure out why only the idToken works to validate with the server, it feels like the access token should be doing that...
//     this.storage.set('TOKEN', tokens.idToken.jwtToken);
//     if (userInfo) {
//       this.storage.set('USER_NAME', userInfo.username);
//     // TODO save the other useful user information (username, etc) to access throughout the app
//     }
//   }

//   register(credentials: RegisterCredentials) {
//     return this.api.register(credentials);
//   }

//   submitUsername(usernameRequest: SubmitUsernameRequest) {
//     return this.api.submitUsername(usernameRequest);
//   }

//   updatePassword(updatePasswordRequest: UpdatePasswordRequest) {
//     return this.api.updatePassword(updatePasswordRequest);
//   }

// }
