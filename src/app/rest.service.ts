import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Iproducts } from './data/products';



@Injectable({
  providedIn: 'root'
})
export class RestService {
  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8'}) };
  constructor(private httpclient: HttpClient) {}

  singUp(input: any): Observable<any>{
    console.log(input);
    return this.httpclient.post("http://localhost:3000/users/addUser", input, this._options)
    .pipe(
      catchError((err) => {
        console.log('error caught in service')
        console.error(err);

        return throwError(err);    //Rethrow it back to component
      })
    )
    
  
  
}
LogIn(input: any): Observable<any>{
  console.log(input);
  return this.httpclient.post("http://localhost:3000/auth/login", input, this._options)
  .pipe(
    catchError((err) => {
      console.log('error caught in service')
      console.error(err);

      return throwError(err);    //Rethrow it back to component
    })
  )
}

getProducts(): Observable<Iproducts[]>{
  return this.httpclient.get<Iproducts[]>("http://localhost:3000/products", this._options)
  .pipe(
    catchError((err) => {
      console.log('error caught in service')
      console.error(err);

      return throwError(err);    //Rethrow it back to component
    })
  )
}










}
