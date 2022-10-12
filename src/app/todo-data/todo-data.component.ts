import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo-data',
  templateUrl: './todo-data.component.html',
  styleUrls: ['./todo-data.component.css']
})
export class TodoDataComponent implements OnInit {

  constructor( private myapi:ApiService) { 
    this.fetchData()
  }


  fetchData=()=>{
    this.myapi.todoList().subscribe(
      (data)=>{
        this.todoData=data
      }
    )
  }
  todoData:any={}
  ngOnInit(): void {
  }

}
