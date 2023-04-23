import { Injectable } from '@angular/core';

// import * as passwordStrength from 'check-password-strength';

const { passwordStrength } = require('check-password-strength')


@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor() { }

  checkPasswordStrength(password: string): any {
    const result = passwordStrength((password));
    // console.log(passwordStrength('Asd1234!').value)
    console.log("Test......................", result);

    return { score: result.score, feedback: result.feedback };
  }

}
