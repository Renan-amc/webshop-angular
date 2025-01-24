import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  imports: [CommonModule, FormsModule],
  templateUrl: './barra-pesquisa.component.html',
  styleUrl: './barra-pesquisa.component.css'
})
export class BarraPesquisaComponent {
  descricao = "";

  constructor(
    private router: Router
  ) { }

  pesquisar() {

    if(this.descricao) {
      this.router.navigate(["produtos"], {queryParams: {descricao: this.descricao}});
      return;
    }
    
    this.router.navigate(["produtos"]);
  }

}
