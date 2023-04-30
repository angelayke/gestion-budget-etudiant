import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.component.html',
  styleUrls: ['./seconnecter.component.scss']
})
export class SeconnecterComponent implements OnInit {
  nom!: string;
  prenom!: string;
  email!: string;
  password!: string;
  repassword!: string;


  emailValid: boolean = false;
  passwordValid: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Formulaire soumis');
  }

  annuler() {
    this.email = '';
    this.password = '';
    console.log('Annuler');
  }

}
