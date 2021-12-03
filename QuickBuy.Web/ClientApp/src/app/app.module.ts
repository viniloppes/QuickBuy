import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ProdutoComponent } from './produto/produto.component';
import { LoginComponent } from './usuario/login/login.component';
import { GuardaRotas } from './autorizacao/guarda.rotas';
import { UsuarioServico } from './servicos/usuario/usuario.servico';
import { CadastroUsuarioComponent } from './usuario/cadastro/cadastro-usuario.component';
import { ProdutoServico } from './servicos/produto/produto.servico';
import { PesquisaProdutoComponent } from './produto/pesquisa-produto/pesquisa-produto.component';
import { CadastroProdutoComponent } from './produto/cadastro-produto/cadastro-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ProdutoComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    PesquisaProdutoComponent,
    CadastroProdutoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'cadastrar-produto', component: CadastroProdutoComponent },
      { path: 'login', component: LoginComponent },
      { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
      { path: 'pesquisar-produto', component: PesquisaProdutoComponent },

    ])
  ],
  providers: [
    UsuarioServico,
    ProdutoServico
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
//{ path: 'produto', component: ProdutoComponent, canActivate: [GuardaRotas] },
