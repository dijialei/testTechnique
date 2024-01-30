import { Todos } from "../app/models/todos";

export const environment : {
    todoList:Todos[],
    todoIds:number,
    urlTodo:string
}=
{
    todoList:[],
    todoIds:1,
    urlTodo:"http://localhost:3001/todos"
};
