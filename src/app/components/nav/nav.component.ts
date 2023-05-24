import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRouterService } from 'src/app/services/app-router.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private readonly authService: AuthService, private readonly appRouter: AppRouterService, private readonly router: Router ) { }

  public profilRoute = this.appRouter.routes.profil;

  ngOnInit(): void {

  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
