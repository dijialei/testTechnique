import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Todos } from '../models/todos';

@Injectable({
  providedIn: 'any',
  
})
export class TodoService {

  private baseUrl = environment.urlTodo;

  constructor(private http:HttpClient) { 

  }

  getTodoList():Observable<Todos[]>{
    return this.http.get<Todos[]>(`${this.baseUrl}`);
  }

  createTodo(todo:Todos){
    return this.http.post(`${this.baseUrl}`,todo);
  }

  updateTodo(todo:Todos){
    return this.http.patch(`${this.baseUrl}/${todo.id}`,todo)
  }
  deleteTodo(todo:Todos){
    return this.http.delete(`${this.baseUrl}/${todo.id}`);
  }
}
