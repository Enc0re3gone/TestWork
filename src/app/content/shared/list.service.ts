import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ListService {
  constructor(private http: HttpClient) {}

  getData () {
    return this.http.get('http://localhost:4200/assets/lyrics.json');
  }
}
