import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProdutosComponent } from './produtos/produtos.component';

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
    }
];
