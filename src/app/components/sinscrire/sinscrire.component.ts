import { Component, OnInit } from '@angular/core';
//
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../../services';
//
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

//
registerForm: FormGroup;
loading = false;
submitted = false;
//

constructor( //
private formBuilder: FormBuilder,
private router: Router,
private authentificationService: AuthService,
private userService: UserService,//?
//private alertService: AlertService
//
) {
//
// redirect to home if already logged in
if (this.authenticationService.currentUserValue) {
this.router.navigate(['/']);
}
//
}

ngOnInit(): void {
//
this.registerForm = this.formBuilder.group({
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  username: ['', Validators.required],
  password: ['', [Validators.required, Validators.minLength(6)]]
});
}
//
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
//

onSubmit() {
console.log('Formulaire soumis');

//
this.submitted = true;

// reset alerts on submit
this.alertService.clear();

// stop here if form is invalid
if (this.registerForm.invalid) {
    return;
}

this.loading = true;
this.userService.register(this.registerForm.value)
    .pipe(first())
    .subscribe(
        data => {
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/login']);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
}
//
annuler() {
this.nom = '';
this.prenom = '';
this.email = '';
this.password = '';
this.repassword = '';
console.log('Annuler');
}
}
