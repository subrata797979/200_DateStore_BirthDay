import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from 'src/app/store';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() storeAttri!: Store;
  @Output() storeDeleteEvent = new EventEmitter<Store>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  onDelete(caughtStoreAttri:Store) {
    this.storeDeleteEvent.emit(caughtStoreAttri);
  }

  

}
