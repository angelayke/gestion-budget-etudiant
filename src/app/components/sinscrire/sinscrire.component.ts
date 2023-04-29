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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Formulaire soumis');
  }

  annuler() {
    console.log('Annuler');
  }

}
