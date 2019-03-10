import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: any ={};
  constructor() { }

  students = [
    {
      id:'1',
      firstname:'Swathi',
      lastname:'Boya',
      email:'swathi@gmail.com',
      phone:'9876543210'
    },
    {
      id:'2',
      firstname:'Divya',
      lastname:'V',
      email:'divya@gmail.com',
      phone:'9876543210'
    }
  ]
  
  addUpdateStudent(){ 
    var update = false;
    if(this.student.id == 0){
      this.student.id = Math.round(Math.random()*1000);
    }
    for(var i=0 ;i<this.students.length;i++){
      if(this.student.id == this.students[i].id){
        update = true;
        this.students[i]=this.student;
        break;
      }
    }
    if(!update){
      this.students.push(this.student);
    }
      this.resetStudent();
  }
  
  // deletePerson(p){
  //   for(var i=0;i<this.persons.length;i++){
  //     if(p.id==this.persons[i].id){
  //       this.persons.splice(i,1);
  //     }
  //   }
  // }
  
  deleteAll(){
    this.students =[];
  }
  editStudent(student){
    this.student = student;
  }
  deleteStudent(id){
    var list = [];
    for( var i=0;i<this.students.length;i++){
      if(id != this.students[i].id ){
        list.push(this.students[i]);
      }
    }
    this.students=list;
  }
  resetStudent(){
    this.student = {
      id:'',
      firstname:'',
      lastname:'',
      email:'',
      phone:''
    }
  }
  ngOnInit() {
    this.resetStudent();
  }

}
