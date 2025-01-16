import { Component } from '@angular/core';
import { IProduto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

  produtos: IProduto[]  | undefined;

  constructor(private produtosService: ProdutosService) {
  }

  ngOnInit(): void {
    this.produtos = this.produtosService.getAll();
  }
}
