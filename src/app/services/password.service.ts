import { Injectable } from '@angular/core';
import { passwordStrength } from 'check-password-strength';
import { PasswordStrength } from '../interfaces/password-strength.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  constructor() {}

  checkPasswordStrength(password: string) {
    const result = passwordStrength(password);

    switch (result.id) {
      case 0:
        return PasswordStrength.TooWeak;
      case 1:
        return PasswordStrength.Weak;
      case 2:
        return PasswordStrength.Medium;
      default:
        return PasswordStrength.Strong;
    }
  }
}
