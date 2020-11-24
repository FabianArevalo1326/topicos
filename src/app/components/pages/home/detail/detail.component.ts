import { Component, OnInit } from '@angular/core';
import {PruebaService} from '../../../../service/prueba.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
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
      "Precio":"250.000",
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
      "Precio":"180.000",
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
      "Precio":"155.000",
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
      "Precio":"95.000"

    },
    {
      "id":5,
      "Titulo":"Poliester Glasurit Serie22",
      "imagen":"assets/img/Productos/5.jpg",
      "Descripcion":"Glasurit Serie22 y Serie 22 VOC - EL SISTEMA DE BASE COLOR DE HS\n" +
        "Una única capa de pintura es realmente todo lo que necesita para obtener resultados de aplicación perfecta utilizando la Serie 22 líneas de alto contenido de sólidos.",
      "Precio":"950.000",
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
      "Precio":"44.000"

    },
    {
      "id":7,
      "Titulo":"Cinta de Enmascarar Scotch 3M",
      "imagen":"assets/img/Productos/7.jpg",
      "Descripcion":"Excelente adaptación a curvas, Indicada para pintura base agua o disolvente Apenas deja borde de pintura, Apenas deja borde de pintura,Resiste ciclos de hasta 100ºC de temperatura.",
      "Precio":"10.000"
    },
    {
      "id":8,
      "Titulo":"Caralz P120 Pulidor",
      "imagen":"assets/img/Productos/8.jpg",
      "Descripcion":"Producto de uso profesional, se recomienda para el pulido rápido de cualquier tipo de pintura, con un alto poder de corte en los recubrimientos de alto rendimiento.",
      "Precio":"16.000"

    },


  ];
  ProductosHogar =[
    {
      "id":1,
      "Titulo":"Sika Transparente 10",
      "imagen":"assets/img/Hogar/1.jpg",
      "Descripcion":"Sika Transparente 10 es inflamable, por lo tanto no se debe fumar cerca, ni exponer el producto al fuego directo.No se debe aplicar bajo sol directo. Proteger de la lluvia 2 a 3 horas después de aplicado.",
      "Precio":"80.000",
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
      "Precio":"250.000",
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
      "Precio":"45.000",
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
      "Precio":"260.000",
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
      "Precio":"100.000",
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
      "Precio":"44.000",
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
      "Precio":"60.000",
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
      "Precio":"35.000",
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
    //this.pos= JSON.parse(localStorage.getItem('pos'));
    this.pos= this.active.snapshot.params.code;




  }



}
