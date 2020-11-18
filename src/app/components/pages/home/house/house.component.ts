import { Component, OnInit } from '@angular/core';
import {PruebaService} from '../../../../service/prueba.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
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
  ProductosHogar =[
    {
      "id":1,
      "Titulo":"Sika Transparente 10",
      "imagen":"assets/img/Hogar/1.jpg",
      "Descripcion":"Sika Transparente 10 es inflamable, por lo tanto no se debe fumar cerca, ni exponer el producto al fuego directo.No se debe aplicar bajo sol directo. Proteger de la lluvia 2 a 3 horas después de aplicado.",
      "Precio":"$80.000",
      "color":[
        {
          "nombre":"Tipo 1 Transparente",
        },
      ]
    },
    {
      "id":2,
      "Titulo":"Viniltex",
      "imagen":"assets/img/Hogar/2.jpg",
      "Descripcion":"La dilución de la pintura se debe hacer de acuerdo al instrumento de aplicación a usar: con brocha o rodillo: se diluye 1 galón con 25% de agua , con pistola convencional: 1 galón con 25% de agua.",
      "Precio":"$250.000",
      "color":[
        {
          "nombre":"Tipo 1 Blanco Hueso Cuñete",
        },
        {
          "nombre":"Tipo 2 Blanco Hueso Cuñete",
        },
        {
          "nombre":"Tipo 1 Blanco Cuñete",
        },
        {
          "nombre":"Tipo 2 Blanco Cuñete",
        },
        {
          "nombre":"Tipo 3 Blanco Cuñete",
        },
      ]
    },
    {
      "id":3,
      "Titulo":"Removedor de pintura",
      "imagen":"assets/img/Hogar/3.jpg",
      "Descripcion":"Es un producto con base en disolventes muy activos, que atacan la mayoría de recubrimientos para su remoción total.Diseñado para quitar cualquier capa de pintura en mal estado y adecuar un nuevo sistema de pintura incompatible con el anterior.",
      "Precio":"$45.000",
      "color":[
        {
          "nombre":"Transparente",
        },
        {
          "nombre":"Blanco",
        },
      ]

    },
    {
      "id":4,
      "Titulo":"Vinilo Pintuland Super Lavable",
      "imagen":"assets/img/Hogar/4.jpg",
      "Descripcion":"Producto con certificado de calidad NTC 1335:2015.Vinilo diluible en agua con bajo olor, bajo VOC, para uso interior y exterior.Excelente lavabilidad y durabilidad.Recomendado para fachadas, muros, paredes,lavabilidad para verse como el primer dia.",
      "Precio":"$260.000",
      "color":[
        {
          "nombre":"Tipo 1 Blanco Puro",
        },
        {
          "nombre":"Tipo 1 Blanco Ilusion",
        },
        {
          "nombre":"Tipo 1 Blanco Lila",
        },
        {
          "nombre":"Tipo 1 Amarrilo primaveral",
        },
        {
          "nombre":"Tipo 1 Amarillo Vivo",
        },
      ]

    },
    {
      "id":5,
      "Titulo":"Vinilo Pintuland Lavable",
      "imagen":"assets/img/Hogar/5.jpg",
      "Descripcion":"Se puede aplicar sobre superficies nuevas como primera mano, antes de aplicar la segunda mano con VINILO LAVABLE TIPO 2 PINTULAND.Vinilo diluible en agua, tipo emulsión para uso interior, recomendado para pintar muros, paredes, superficies de cemento.",
      "Precio":"$100.000",
      "color":[
        {
          "nombre":"Tipo 2 Blanco Puro",
        },
        {
          "nombre":"Tipo 2 Blanco Ilusion",
        },
        {
          "nombre":"Tipo 2 Gris Nube",
        },
        {
          "nombre":"Tipo 2 Crema Suave",
        },
        {
          "nombre":"Tipo 2 Verde Agua",
        },
      ]
    },
    {
      "id":6,
      "Titulo":"Vinilo Philaac",
      "imagen":"assets/img/Hogar/6.jpg",
      "Descripcion":"Vinilo tipo 1 de acabado mate.Por galon",
      "Precio":"$44000",
      "color":[
        {
          "nombre":"Tipo 1 Blanco Puro",
        },
        {
          "nombre":"Tipo 1 Negro",
        },
        {
          "nombre":"Tipo 1 Azul",
        },
        {
          "nombre":"Tipo 1 Verde Primavera",
        },
        {
          "nombre":"Tipo 1 Terracota",
        },
      ]

    },
    {
      "id":7,
      "Titulo":"Esmalte Sintetico",
      "imagen":"assets/img/Hogar/7.jpg",
      "Descripcion":" Esmalte sintético de gran utilidad en la industria y en el hogar, de secamiento rápido,colores entremezclables, acabado brillante o mate, lavable  y con excelente adherencia.",
      "Precio":"$60.000",
      "color":[
        {
          "nombre":"Dorado",
        },
        {
          "nombre":"Alumnio Bituminoso",
        },
      ]
    },
    {
      "id":8,
      "Titulo":"Barniz Sintetico",
      "imagen":"assets/img/Hogar/8.jpg",
      "Descripcion":"Barniz alquídico de secamiento al aire, acabado transparente brillante y mate, con especial adherencia, nivelación y flexibilidad, con alto rendimiento.",
      "Precio":"$35.000",
      "color":[
        {
          "nombre":"Transparente Brillante",
        },
        {
          "nombre":"Transparente Mate",
        },
      ]
    },

  ];

  ngOnInit(): void {
    this.pos= this.active.snapshot.params.code;
  }

}
