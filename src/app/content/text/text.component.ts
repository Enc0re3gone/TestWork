import { Component, OnInit } from '@angular/core';
import {ListService} from '../shared/list.service';
import Lyrics from '../../../assets/lyrics.json';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  providers: [ListService]
})

export class TextComponent implements OnInit {
  lyrics = [];
  lists = [];
  count = 3;
  msg = false;
  firstShow = false;
  constructor(private listService: ListService) {
  }
  show () {
    if (this.lyrics.length >= this.count && this.count <= this.lyrics.length) {
      for (let i = 0; i < this.count; i++) {
        this.lists.push(this.lyrics[i]);
      }
      this.firstShow = true;
    }
  }
  addCount () {
    this.count++;
    this.count <= this.lyrics.length ? this.lists = [] : this.msg = true;
    this.show ()
  }
  ngOnInit() {
    this.listService.getData().subscribe(data => {
      this.lyrics=data["data"];
      if (this.lyrics.length >= this.count) {
        this.show();
      }
    });
  }
}
