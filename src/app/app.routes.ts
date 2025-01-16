import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';

export const routes: Routes = [
    {
        path: 'header',
        component: HeaderComponent,
        title: 'Header!'
    },
    {
        path: 'footer',
        component: FooterComponent,
        title: 'Footer!'
    },
    {
        path: 'produtos',
        component: ProdutosComponent,
        title: 'Produtos!'
    },
    {
        path: '',
        component: ProdutosComponent,
        title: 'Produtos!'
    },
    {
        path: '**',
        component: NaoEncontradaComponent,
        title: 'Pagina não encontrada!'
    }
];
