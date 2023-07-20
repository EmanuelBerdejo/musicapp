import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "Iron Man",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmarvel.fandom.com%2Fes%2Fwiki%2FAnthony_Stark_%2528Tierra-616%2529&psig=AOvVaw1TGcdX-47F5oCjl5rQGVEJ&ust=1689954090059000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiKgNzPnYADFQAAAAAdAAAAABAE",
      icon: "beer-outline",
      description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las" 
    },
    {
      title: "Thor",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hobbyconsolas.com%2Fnoticias%2Fproblemilla-mjolnir-thor-amor-trueno-necesita-explicar-994043&psig=AOvVaw3D4sTns9zI7YJq4MdPoBOL&ust=1689954130561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOimke_PnYADFQAAAAAdAAAAABAR",
      icon: "barbell-outline",
      description: "Hola soy la explicacion del slide, Hola soy la explicacion del slide" 
    },
    {
      title: "Capitan America",
      img: "",
      icon: "beer-outline",
      description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto" 
    },
    {
      title: "Gatitos",
      img: "https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg",
      icon: "beer-outline",
      description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las" 
    }
  ]

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  close() {
    console.log("estoy tratando de cerrar");
    this.storage.set("introShow", true);
    this.router.navigateByUrl("/menu/home");
  }

}
