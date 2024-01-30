import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { Todos } from '../../../../models/todos';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../../../services/todo.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  todoList!: Todos[];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe({
      next: res => {
        this.todoList = res;
      },
      error: error => { }
    });

  }
  done(i: number) {
    let updateTodo = this.todoList[i];
    updateTodo.completed = true;
    this.todoService.updateTodo(updateTodo).subscribe(res => {
      this.todoList[i].completed = true;

    })


  }
  delete(i: number) {
    this.todoService.deleteTodo(this.todoList[i]).subscribe(res => {
      this.todoList.splice(i, 1);
    })


  }
}
