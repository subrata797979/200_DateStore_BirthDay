import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from 'src/app/store';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  stores!: Store[];
  nameVar!: string;
  dateVar!: Date;

  @Output() addUserEvent = new EventEmitter<Store>();

  constructor() { }

  ngOnInit(): void {
  }

  public calculateAge(): number {
    if(this.dateVar){
      var timeDiff = Math.abs(Date.now() - new Date(this.dateVar).getTime());
      let ageVar = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      return ageVar;
    }
    return 0;
  }
  

  onSubmit() {
    console.log("Saved");
    const storeObj = {
      name : this.nameVar,
      date : this.dateVar,
      age : this.calculateAge()
    }
    
    console.log(storeObj)
    this.addUserEvent.emit(storeObj);
  }
}
