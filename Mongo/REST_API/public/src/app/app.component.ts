import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: object[];
  task: object;
  newTask: object;
  editTask: object;

  constructor(private httpService: HttpService) {}
    ngOnInit() {
      this.getTasksFromService();
      this.newTask = { title: '', description: '' };
      this.editTask = { title: '', description: '' };
    }

    getTasksFromService() {
      const tasks = this.httpService.getTasks();
      tasks.subscribe((data: any) => {
        console.log('Got our tasks!', data);
        this.tasks = data;
      });
    }

    getTaskFromService(id: string) {
      const task = this.httpService.getTasksID(id);
      task.subscribe((data: any) => {
        console.log('We got 1 task!', data);
        this.task = data;
      });
    }

    onCreate() {
      const newTask = this.httpService.createTask(this.newTask);
      newTask.subscribe((data: any) => {
        this.getTasksFromService();
        console.log('New Task:', data);
      });
      this.newTask = { title: '', description: '' };
    }

    onEdit(id: string) {
      const editTask = this.httpService.updateTask(id, this.editTask);
      editTask.subscribe((data: any) => {
        this.getTasksFromService();
        console.log('Edited Task:', data);
      });
      this.editTask = { title: '', description: '' };
    }

    onDelete(id: string) {
      const deleteTask = this.httpService.deleteTask(id);
      deleteTask.subscribe((result: any) => {
        console.log('Deleting 1 task', result);
        this.getTasksFromService();
      });
    }
}
