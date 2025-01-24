import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { RouterModule } from '@angular/router';
import { BarraPesquisaComponent } from '../barra-pesquisa/barra-pesquisa.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, BarraPesquisaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    public carrinhoService: CarrinhoService
  ) { }

}
