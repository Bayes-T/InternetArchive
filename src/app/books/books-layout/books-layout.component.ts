import { Component } from '@angular/core';

@Component({
  selector: 'app-books-layout',
  templateUrl: './books-layout.component.html',
  styleUrls: ['./books-layout.component.css']
})
export class BooksLayoutComponent {

  public items = [
    {
      img: "home",
      name: "Home",
      url: "/books/home"
    },
    {
      img: "person",
      name: "Autor",
      url: "/books/author"
    },
    {
      img: "dashboard",
      name: "Categoría",
      url: "/books/category"
    },
    {
      img: "list",
      name: "Lista",
      url: "/books/list"
    },
  ]

  //AGREGAR LA CONFIGURACIÓN PARA QUE NO SE MODIFIQUE EL ESPACIO AL ABRIR EL SIDENAV
  //AGREGAR EL FONDO QUE VOY A QUERER USAR, MIRAR CONFIG EN OBSIDIAN

  //Finalmente, guardar en un nuevo obsidian el ejemplo base.
  //Construir un tema, si no ver el ejemeplo de como es de complicado cambiar
}
