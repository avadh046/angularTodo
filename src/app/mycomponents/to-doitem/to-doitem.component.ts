import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo.model';

@Component({
  selector: 'app-to-doitem',
  templateUrl: './to-doitem.component.html',
  styleUrls: ['./to-doitem.component.css']
})
export class ToDoitemComponent implements OnInit {
  
  @Input() public todos = "123" ;
  constructor() { }

  ngOnInit(): void {
  }

}
