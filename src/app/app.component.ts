import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gestion-budget-etudiant';

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit() {
    // this.authService.login({
    //   username: 'mathieu.theriault89@me.com',
    //   password: 'a1032010',
    // });
    this.authService.login({
      username: 'jean@gmail.com',
      password: 'jean12345',
    });

    this.http.get('/expenses/all/643dc744faad3a88eab7e7ee').subscribe((res) => {
      console.log(res);
    });
  }
}
