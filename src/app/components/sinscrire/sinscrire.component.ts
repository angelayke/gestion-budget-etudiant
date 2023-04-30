import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Formulaire soumis');
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
