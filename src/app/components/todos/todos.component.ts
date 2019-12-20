import { Component, OnInit, HostBinding } from '@angular/core';
import { TodosService} from './todos.service';
import { ResponseTodos } from '../components.model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { slideInDownAnimation }   from '../../animations';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers:[TodosService]
})
export class TodosComponent implements OnInit {
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode VIII - The Last Jedi',
    'Episode VIII - The Last Jedi'
  ];
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
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
  setTodo(){

  }

}
