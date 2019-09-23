import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newNote: object;
  notes: object[];

  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newNote = { content: '' };
    this.getNotesFromService();
  }

  onSubmit() {
    const observable = this._httpService.createNote(this.newNote);
    observable.subscribe((data: object) => {
      console.log('Note created', data);
    });
    this.getNotesFromService();
    this.newNote = { content: '' };
  }

  getNotesFromService() {
    const observable = this._httpService.getNotes();
    observable.subscribe((data: object[]) => {
      console.log('Got our notes', data);
      this.notes = data;
    });
  }
}
