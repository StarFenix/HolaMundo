import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
titulo: string = 'Este es un título pipe';
dinero: number = 3456810.1;
ganancias: number = 0.78;
fecha: Date = new Date ('09/3/1997');
texto: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil labore dolores natus earum voluptatum quod nobis, quidem voluptatibus maiores mollitia corrupti sed cum alias molestiae sint explicabo, aliquid corporis sequi?"

  constructor() { }

  ngOnInit(): void {
  }

}
