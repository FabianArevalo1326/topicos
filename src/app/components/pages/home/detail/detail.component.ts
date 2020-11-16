import { Component, OnInit } from '@angular/core';
import {PruebaService} from '../../../../service/prueba.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  selectedValue:string;

  constructor(
    public pruebaService:PruebaService,
    private active: ActivatedRoute

  ) { }

  disabled=false;
  array=[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ];
  pos=null;
  Productos =[
    {
      "id":1,
      "Titulo":"Poliuretano Single Stage S600",
      "imagen":"assets/img/Productos/1.jpg",
      "Descripcion":"Los entonadores de la serie 600 de Automotriz Pintuco son Poliuretanos en 2 componentes,formulados especialmente para obtener un producto de alta calidad.",
      "Precio":"$250.000",
      "color":[
        {
          "nombre":"Amarillo Verdoso",
        },
        {
          "nombre":"Amarillo",
        },
        {
          "nombre":"Magenta",
        },
        {
          "nombre":"Azul",
        },
        {
          "nombre":"Verde",
        },
        {
          "nombre":"Blanco",
        },
        {
          "nombre":"Negro",
        },
        {
          "nombre":"Naranja",
        },
      ]
    },
    {
      "id":2,
      "Titulo":"Poliuretano Caralz 1060",
      "imagen":"assets/img/Productos/2.jpg",
      "Descripcion":"Poliuretano 1060 para sistema con alta resistencia a los arañazos.Alto contenido de sólidos;muy resistente a los arañazos; destacada resistencia.",
      "Precio":"$180.000",
      "color":[
        {
          "nombre":"Amarillo Rojizo",
        },
        {
          "nombre":"Amarillo Naranja",
        },
        {
          "nombre":"Azul",
        },
        {
          "nombre":"Verde",
        },
        {
          "nombre":"Blanco",
        },
        {
          "nombre":"Negro",
        },
        {
          "nombre":"Naranja",
        },
        {
          "nombre":"Magenta",
        },
        {
          "nombre":"Alumnio",
        },
      ]
    },
    {
      "id":3,
      "Titulo":"Poliuretano Ixell 990",
      "imagen":"assets/img/Productos/3.jpg",
      "Descripcion":"El Ixell Poliuretano de la serie 990 es un producto dos componentes de secado rápido con excelentes propiedades de adherencia, fácil lijado, medio contenido de sólidos.",
      "Precio":"$155.000",
      "color":[
        {
          "nombre":"Amarillo Naranja",
        },
        {
          "nombre":"Azul",
        },
        {
          "nombre":"Verde",
        },
        {
          "nombre":"Blanco",
        },
        {
          "nombre":"Negro",
        },
        {
          "nombre":"Naranja",
        },
        {
          "nombre":"Magenta",
        },
        {
          "nombre":"Alumnio",
        },
        {
          "nombre":"Amarillo Verdoso",
        },
      ]

    },
    {
      "id":4,
      "Titulo":"Base Anticorrosiva para Metal",
      "imagen":"assets/img/Productos/4.jpg",
      "Descripcion":"El Poliuretano IXELL es un sistema de dos componentes fabricado a base de resinas poliuretano; Adicionalmente endurecedor de isocianato, Endurecedor X-20.",
      "Precio":"95000"

    },
    {
      "id":5,
      "Titulo":"Poliester Glasurit Serie22",
      "imagen":"assets/img/Productos/5.jpg",
      "Descripcion":"Glasurit Serie22 y Serie 22 VOC - EL SISTEMA DE BASE COLOR DE HS\n" +
        "Una única capa de pintura es realmente todo lo que necesita para obtener resultados de aplicación perfecta utilizando la Serie 22 líneas de alto contenido de sólidos.",
      "Precio":"$950.000",
      "color":[
        {
          "nombre":"Amarillo",
        },
        {
          "nombre":"Morado",
        },
        {
          "nombre":"Magenta",
        },
        {
          "nombre":"Azul",
        },
        {
          "nombre":"Verde",
        },
        {
          "nombre":"Blanco",
        },
        {
          "nombre":"Negro",
        },
        {
          "nombre":"Naranja",
        },
      ]
    },
    {
      "id":6,
      "Titulo":"Laca Philaac",
      "imagen":"assets/img/Productos/6.jpg",
      "Descripcion":"Lacas nitrocelulosicas automotrices y para superficies metalicas, de madera o plasticas, econ6micas, para acabados brillantes. Para los colores disponibles dirijase a la carta de aplicaciones.",
      "Precio":"44000"

    },
    {
      "id":7,
      "Titulo":"Cinta de Enmascarar Scotch 3M",
      "imagen":"assets/img/Productos/7.jpg",
      "Descripcion":"Excelente adaptación a curvas, Indicada para pintura base agua o disolvente Apenas deja borde de pintura, Apenas deja borde de pintura,Resiste ciclos de hasta 100ºC de temperatura.",
      "Precio":"10000"
    },
    {
      "id":8,
      "Titulo":"Caralz P120 Pulidor",
      "imagen":"assets/img/Productos/8.jpg",
      "Descripcion":"Producto de uso profesional, se recomienda para el pulido rápido de cualquier tipo de pintura, con un alto poder de corte en los recubrimientos de alto rendimiento.",
      "Precio":"16000"

    },


  ];

  ngOnInit(): void {
    //this.pos= JSON.parse(localStorage.getItem('pos'));
    this.pos= this.active.snapshot.params.code;




  }



}
