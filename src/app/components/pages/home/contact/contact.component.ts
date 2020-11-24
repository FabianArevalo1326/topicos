import { Component, OnInit } from '@angular/core';
import {person} from '../models/person';
import {PruebaService} from '../../../../service/prueba.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  pruebaPerson:person = {
    nombre:null,
    apellido:null,
    telefono:null,


  }

  constructor(
    private router:Router

  ) { }

  ngOnInit(): void {

  }
  enviar(){
    this.pruebaPerson=this.pruebaPerson;
    console.log(this.pruebaPerson);
    localStorage.setItem('prueba',JSON.stringify(this.pruebaPerson));
  }

}
