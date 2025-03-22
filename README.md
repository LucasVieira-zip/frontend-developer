### Questionário - RESPONDIDO 👍

1. O que são ``components`` e ``directives`` e quais as difenças entre eles? Dê alguns exemplos de utilização.
R.: Components são arquivos dentro da aplicação onde você pode programar tanto a aparência quanto o comportamento de uma parte específica do código. Por exemplo, o component "searchbar" que utilizei na Pokedex, nele, pude programar o aparência e comportamento e depois utiliza-lo. Directives são classes utilizadas dentro de um ``HTML`` e permitem modificar o comportamento do mesmo toda vez que o angular é compilado.

2. O que são ``services``? Dê alguns exemplos de utilização.
R.:  Entregam funcionalidades que podem ser injetadas em componentes ou outras classes para fornecer uma lógica específica. Ao invés de ter a mesma lógica espalhada por vários componentes, você centraliza tudo no serviço, por exemplo, há services que interagem com APIs.

3. O que são ``pipes``? Dê alguns exemplos de utilização.
R.:  funções que permitem transformar dados em templates de maneira declarativa. São muito úteis quando você precisa exibir valores de uma forma específica, como formatação de datas, textos, entre outros.

4. O que é ``data-binding`` e quais os tipos que o Angular dá suporte?
R.: É um mecanismo que facilita a comunicação entre o template HTML e o componente TypeScript, garantindo que as alterações em um lado afete o outro lado também. O angular da suporte a

- Interpolação ({{ }}): Exibe valores do componente no template HTML.
Exemplo: {{ nome }}

- Property Binding ([ ]): Liga uma propriedade do elemento DOM a uma propriedade do componente.
Exemplo: [src]="urlImagem"

- Event Binding (( )): Liga um evento DOM a um método no componente.
Exemplo: (click)="onClique()"

- Two-Way Data Binding ([( )]): Permite que os dados fluam em ambas as direções (componente <-> template), frequentemente usado em campos de formulários.
Exemplo: [(ngModel)]="nome"

5. Como se adiciona um *listener* de eventos do usuário em um componente? Por exemplo, como adicionar uma função que responde a um clique de usuário?
R.: No Angular, você pode adicionar um listener de eventos diretamente nos templates usando a data-biding Event Binding. Você utiliza a sintaxe (click) no seu template HTML e conta o que será executado quando o evento ocorrer.

<p>{{ mensagem }}</p>

<button (click)="mudarMensagem()">Clique aqui</button> 

6. Quais as diferenças entre ``constructor`` e ``ngOnInit``, e quando devemos usar cada um?
R.: O constructor é chamado sempre que a instância do componente ou serviço é criada, o principal uso do constructor é para injetar dependências. Por exemplo, serviços, outros componentes, ou outras dependências necessárias para o funcionamento do componente. O ngOnInit é chamado após a construção da instância do componente e após as dependências serem injetadas (ou seja, depois do constructor ser executado). O ngOnInit é ideal para qualquer inicialização adicional que depende da existência de elementos de template ou de outros serviços já injetados.

7. Quais as diferenças entre ``Observables`` e ``Promises``? Como você o utilizaria cada um em um ``template``?
R.: Um Observable pode emitir múltiplos valores ao longo do tempo, eles são assincrônicos e podem ser observados em tempo real para receber novos valores conforme forem emitidos. Já a Promise representa um valor que estará disponível em algum momento no futuro, mas depois de resolvida ou rejeitada, a Promise não pode ser alterada e é finalizada.

export class ExemploComponent {
  meuObservable = new Observable<string>(subscriber => {
    setTimeout(() => subscriber.next('Primeiro valor'), 1000);
    setTimeout(() => subscriber.next('Segundo valor'), 2000);
    setTimeout(() => subscriber.complete(), 3000);
  });
}

export class ExemploComponent {
  minhaPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve('Resposta da Promise'), 1000);
  });
}

8. Quais as diferenças entre ``template-driven forms`` e ``reactive forms``? Como fazer validação de dados de formulário em cada caso?
R.: Ambas têm o objetivo de gerenciar a entrada de dados e validação de formulários, mas têm diferenças no modo de implementação e controle. ``Template-driven forms`` no Angular são formulários onde a maior parte da lógica de controle e validação é feita diretamente no template HTML. A interação com o formulário e sua validação são gerenciadas através das diretivas do Angular no próprio template, sem a necessidade de escrever muita lógica no componente TypeScript. ``Reactive forms`` proporcionam mais controle e flexibilidade, permitindo que o desenvolvedor defina explicitamente a estrutura do formulário no componente TypeScript. Eles são baseados na programação reativa, usando o RxJS para observar as mudanças e realizar validações dinâmicas. A estrutura do formulário e as validações são criadas de forma programática.

9.  Como se utiliza o ``angular router``? Quais são as formas de enviar parâmetros para uma rota?
R.:  Para utilizar o Angular Router, você precisa importar e configurar o RouterModule no módulo da sua aplicação (app.module.ts), importar RouterModule no módulo (app.module.ts), definir as rotas e então definir o <router-outlet />, que é o espaço onde o conteúdo das rotas será exibido. Existem duas formas principais de enviar parâmetros para uma rota no Angular Router: path parameters, onde os parâmetros de rota são definidos diretamente no caminho da rota e  query parameters, onde os parâmetros de consulta são passados na URL após o símbolo ``?``.

10.  O que são *guards de rota* e para que são úteis?
R.: Route guards são serviços especiais usados para proteger ou modificar a navegação entre as rotas da aplicação. Eles são úteis para controlar o acesso às rotas com base em condições específicas, como autenticação, permissões ou outras verificações antes de permitir ou bloquear a navegação para uma rota.

11. O que é ``NgZone``? Em que momento deve ser utilizada?
R.: Mecanismo de detecção de mudanças e a execução de código assíncrono, como setTimeout, setInterval, Promises e outras operações assíncronas. O NgZone permite que o Angular detecte mudanças e atualize a interface do usuário de forma automática sempre que algo no código assíncrono mudar o estado da aplicação.

 pode ser util se você tem tarefas assíncronas ou operações intensivas que não precisam disparar a detecção de mudanças (e você quer melhorar a performance da aplicação), pode executar código fora da ngzone para evitar atualizações desnecessárias da interface do usuário ou então pode ser util para forçar a detecção de mudanças após execução de código assíncrono. Às vezes, quando você integra com APIs externas (como WebSockets ou outras bibliotecas), elas podem não disparar a detecção de mudanças do Angular. Usando o NgZone, você pode garantir que a detecção de mudanças seja realizada após a execução de uma operação assíncrona.

12. O que é *injeção de dependências* e por que isso é útil? Como você realiza injeção de dependências entre módulos?
R.: É um padrão que visa reduzir o acoplamento entre as partes de um sistema, permitindo que objetos sejam passados nas classes que precisam deles, em vez de as classes criarem suas próprias dependências. A injeção de dependências é usada para fornecer serviços e objetos de forma eficiente e gerenciável.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Fornecendo globalmente
})
export class AuthService {
  login() {
    console.log('Login realizado');
  }
}


Ah, e a mais importante de todas: Bulbassauro, Charmander ou Squirtle? =) 
-Sem dúvidas eu vou de Squirtle!









# PokedexLucasvieira

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
