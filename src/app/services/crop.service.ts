import { Injectable } from '@angular/core';
import {AngularFireDatabase , AngularFireList , AngularFireObject} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CropService {
  
  constructor( private abc : AngularFireDatabase) { }
  
  getcropDetails(){
    return this.abc.list('/crop').snapshotChanges()
  }
  getQuestion(data){
    return this.abc.list('/Question/' + data).snapshotChanges()
  }
  getNotification(){
    return this.abc.list('/Notification').snapshotChanges()
  }
  addUser(data){
    return this.abc.list('/user').push(data);
  }
  getuser(){
    return this.abc.list('/user').snapshotChanges()
  }
  getGov(){
    return this.abc.list('/Government').snapshotChanges()
  }
  getFer(){
    return this.abc.list('/Fertilizer').snapshotChanges()
  }
 
}
