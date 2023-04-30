import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-edit',
  templateUrl: './profil-edit.component.html',
  styleUrls: ['./profil-edit.component.scss']
})
export class ProfilEditComponent implements OnInit {
  nom!: string;
  prenom!: string;
  password!: string;
  repassword!: string;

  nomValid: boolean = false;
  prenomValid: boolean = false;
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
    this.password = '';
    this.repassword = '';
    console.log('Annuler');
  }

}
