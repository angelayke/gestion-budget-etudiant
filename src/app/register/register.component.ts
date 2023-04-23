import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../services/password.service';
// import { PasswordValidator } from 'ngx-password-strength';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  password: string = '';
  result: any;

  constructor(private passwordService: PasswordService) { }

  ngOnInit(): void {
  }
  checkPassword() {
    this.result = this.passwordService.checkPasswordStrength(this.password);
  }


}
