import { Component, OnInit } from '@angular/core';
import { AppRouterService } from 'src/app/services/app-router.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.component.html',
  styleUrls: ['./seconnecter.component.scss'],
})
export class SeconnecterComponent implements OnInit {
  nom!: string;
  prenom!: string;
  email!: string;
  password!: string;
  repassword!: string;

  emailValid: boolean = false;
  passwordValid: boolean = false;

  constructor(
    private readonly authService: AuthService,
    private readonly appRouter: AppRouterService
  ) {}

  ngOnInit(): void {
    this.authService.$isAuthenticated.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        // this.appRouter.goToHome();
        this.appRouter.goToMain();
      }
    });
  }

  onSubmit() {
    this.authService.login({ username: this.email, password: this.password });
  }

  annuler() {
    this.email = '';
    this.password = '';
    console.log('Annuler');
  }
}
