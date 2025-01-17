import { Component, Pipe } from '@angular/core';
import { ProdutosService } from '../../produtos.service';
import { IProduto } from '../../produtos';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotificacaoService } from '../../notificacao.service';

@Component({
  selector: 'app-detalhes-produto',
  imports: [FormsModule, CommonModule],
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent {

  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService, 
    private route: ActivatedRoute,
    private notificaoService: NotificacaoService 
  ) { }

  ngOnInit(): void { 
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId);
   }

   adicionarAoCarrinho() {
    this.notificaoService.notificar("O produto foi adicionado ao carrinho");
   }

}
