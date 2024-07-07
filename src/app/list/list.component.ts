import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Todo } from '../class/todo';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  listValue: string = "";

  todoList: Todo[] = [
    {
      content: "Todo 1",
      value: false,
    },
    {
      content: "Todo 2",
      value: false,
    },
    {
      content: "Todo 3",
      value: false,
    }
  ];

  addTask() {
    if (this.listValue.trim()) {
      this.todoList.push({ content: this.listValue, value: false });
      this.listValue = "";
    }
  }

  deleteTask(index: number) {
    this.todoList.splice(index, 1);
  }
}
