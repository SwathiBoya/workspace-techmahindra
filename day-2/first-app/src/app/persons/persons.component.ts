import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'person-app',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  constructor() { }

  persons = [
    {
      name: 'Swathi',
      email:'swathi@gmail.com'
    },
    {
      name: 'Sudha',
      email:'sudha@gmail.com'
    }
  ];

  buttonClick(){
    alert("Hello to Angular world");
  }
  buttonAdd(){
    alert("Hello to Angular world");
  }
  ngOnInit() {
  }

}
