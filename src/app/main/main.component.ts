import { Component, OnInit } from '@angular/core';
import { Store } from "../store";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  stores!: Store[];
  localData!: string | null;

  constructor() {
    this.localData = localStorage.getItem("localStore");
    if(this.localData == null) {
      this.stores = [];
    }
    else {
      this.stores = JSON.parse(this.localData);
    }
   }

  ngOnInit(): void {
  }

  addUser(storeObj:Store) {
    console.log(storeObj);
    this.stores.push(storeObj);
    localStorage.setItem("localStore", JSON.stringify(this.stores));
  }

  deleteUser(storeObj:Store) {
    const index = this.stores.indexOf(storeObj);
    this.stores.splice(index,1);
    localStorage.setItem("localStore", JSON.stringify(this.stores));
  }

}
