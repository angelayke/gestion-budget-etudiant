import { Component, OnInit } from '@angular/core';
import { AppRouterService } from 'src/app/services/app-router.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent implements OnInit {
  constructor(private readonly appRouter: AppRouterService) {}

  public loginRoute = this.appRouter.routes.login;
  public registerRoute = this.appRouter.routes.register;

  ngOnInit(): void {}
}
