import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { app } from 'src/constants/app.constants';
import { TokenInjectorService } from './token-injector.service';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService  {

  constructor(private http:HttpClient, private authService: AuthService, private tokenInjector: TokenInjectorService ) { }

  getExpenses(): Observable<Expense[]> {
    if(!this.authService.$isAuthenticated) {
      throw new Error("L'utilisateur n'est authentifié");
      // this.router.navigate(['/login']);
    } else {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenInjector.injectToken}`);
      return this.http.get<Expense[]>(`${app.http.baseUrl}/expenses`);

    }

  }

  getExpense(id: string): Observable<Expense> {
    if(!this.authService.$isAuthenticated) {
      throw new Error("L'utilisateur n'est authentifié");
      // this.router.navigate(['/login']);
    } else {
       const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenInjector.injectToken}`);
       return this.http.get<Expense>(`${app.http.baseUrl}/expenses/${id}`);

    }
  }


}
