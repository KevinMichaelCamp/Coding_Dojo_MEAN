import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sup dog?... heard you like MEAN';
  tasks: object[];
  task: object;

  constructor(private httpService: HttpService) {}
    ngOnInit() {
      // this.getTasksFromService();
      // this.getTaskFromService();
      // this.deleteTaskFromService();
    }

    getTasksFromService() {
      const tasks = this.httpService.getTasks();
      tasks.subscribe((data: any) => {
        console.log('Got our tasks!', data);
        this.tasks = data;
      });
    }

    getTaskFromService(id) {
      const task = this.httpService.getTasksID(id);
      task.subscribe((data: any) => {
        console.log('We got 1 task!', data);
        this.task = data;
      });
    }

    deleteTaskFromService() {
      const deleteTask = this.httpService.deleteTask();
      deleteTask.subscribe((result: any) => {
        console.log('Deleting 1 task', result);
      });
    }
}
