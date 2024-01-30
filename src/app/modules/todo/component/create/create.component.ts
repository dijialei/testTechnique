import { Component, OnInit } from '@angular/core';
import { Todos } from '../../../../models/todos';
import { environment } from '../../../../../environments/environment.development';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../../../services/todo.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  errorText: string = '';
  length = 0;
  text: string = "";
  todo: Todos = {
    id: "",
    text: this.text,
    createdAt: 0,
    completed: false
  };
  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe({
      next: res => {
        if (res.length > 0) {
          this.length = res.length;
          let num: number = Number(res[this.length - 1].id);
          num = num + 1;
          this.todo.id=num.toString();
        } else this.todo.id = "1";
      },
      error: error => { }
    })
  }

  onSubmit() {
    if (this.text.trim()) {
      this.todo.createdAt = new Date().getTime();
      this.todo.text = this.text;
      this.todoService.createTodo(this.todo).subscribe({
        next: res => {
          this.router.navigateByUrl("/todo/list");
        },
        error: error => { }
      })


    } else {
      this.errorText = "L'entrée ne peut pas être vide !";
    }


  }

}
