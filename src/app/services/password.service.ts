import { Injectable } from '@angular/core';


const { passwordStrength } = require('check-password-strength')


@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor() { }

  checkPasswordStrength(password: string): any {
    const result = passwordStrength((password));
      return { score: result.score, feedback: result.feedback };
  }

}
