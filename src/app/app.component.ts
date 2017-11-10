import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  msg: string = '';

  constructor(public af: AngularFirestore) {
    this.items = af.collection('/messages').valueChanges();
    this.items.subscribe(theitems => {
      console.log(theitems);
    })
  }

  send(chatMsg: string) {
    // this.items.push({ message: chatMsg })
    this.msg = '';
  }
}
