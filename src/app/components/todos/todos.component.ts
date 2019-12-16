import { Component, OnInit } from '@angular/core';
import { TodosService} from './todos.service';
import { ResponseTodos } from '../components.model';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers:[TodosService]
})
export class TodosComponent implements OnInit {

  constructor(private todoSercive:TodosService) { }
  resTodo:ResponseTodos
  ngOnInit() {
    this.getAllTodo();
  }
  getAllTodo(){
    this.todoSercive.getAllTodo().subscribe(res => {
      console.log('todos: ',res)
      this.resTodo = res;
    })
  }
  setTodo(){

  }

}
