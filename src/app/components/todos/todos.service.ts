import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResponseTodos} from '../components.model';
@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}; 
  constructor(private http:HttpClient) { }
  getAllTodo(): Observable<ResponseTodos> {
    return this.http
    .get<ResponseTodos>('http://localhost:8080/getAllTodo',this.httpOptions)            
    .pipe(catchError((err: HttpErrorResponse) => observableThrowError(err.statusText)));
  }
  addTodo(param): Observable<ResponseTodos> {    
    return this.http
    .post<ResponseTodos>('http://localhost:8080/addTodo',{title:'',detail:''},this.httpOptions)            
    .pipe(catchError((err: HttpErrorResponse) => observableThrowError(err.statusText)));
  }
}
