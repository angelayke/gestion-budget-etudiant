import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sinscrire',
  templateUrl: './sinscrire.component.html',
  styleUrls: ['./sinscrire.component.scss']
})
export class SinscrireComponent implements OnInit {
  nom!: string;
  prenom!: string;
  email!: string;
  password!: string;
  repassword!: string;

  nomValid: boolean = false;
  prenomValid: boolean = false;
  emailValid: boolean = false;
  passwordValid: boolean = false;
  repasswordValid: boolean = false;

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Formulaire soumis');
    this.authService.register({
      username: this.email,
      name: this.prenom,
      last_name: this.nom,
      password: this.password,
    });
  }

  annuler() {
    this.nom = '';
    this.prenom = '';
    this.email = '';
    this.password = '';
    this.repassword = '';
    console.log('Annuler');
  }

}
