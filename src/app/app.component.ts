import { Component } from '@angular/core';
import { Member } from './core/models/member';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'afterthat';

  members = [
    {name: "Raphael", lastName: "Silva", 
    about: [
      "Rapha Silva é baterista na After That,e iniciou sua jornada nas baquetas ainda novo, com cinco anos de idade. Desde então, a música se tornou a sua paixão. Suas principais inspirações na bateria são: Dave Weckly, João Barone, Steve Gad, Stewart Copeland, Matt Helders e Buddy Rich. ",
"Rapha é fã de carteirinha do Foo Fighters (primeira banda de rock alternativo em que escutou) e apreciador das linhas de bateria agressiva e riffs poderosos da banda, sendo que sua música favorita é ‘Time Like These’. ",
"Fora da música, Rapha é formado em Administração e tem alguns hobbies como: ler livros, jogar videogame e assistir séries e filmes. ",
"#WeAreAfterThat"
]
      
      , photo: "assets/rapha.png"},
    
    
    {name: "Davi", lastName: "Marques", about: [
     "Davi Marques é amante das cordas e músico desde 2009 devido a grande febre do Guitar Hero na época, tendo aulas pelo seu mestre jedi Luís Carlos Zalmonelli até 2012. Sua primeira banda foi no intuito de quebrar tudo e gritar com uma banda de Metal Core chamado Morphina, posteriormente entrou para o J-rock com a banda Taiken afim de tocar aberturas de animes, também participou da banda de Heavy Metal e Classic Rock chamada Projeto Cineral, e até projetos pré-After com o baixista Fagundão com músicas aleatórias titulado como BlackBird/Banda de Valencia.",
    "Hoje em dia o guitarrista segue com uma vibe mais voltada para o Jazz, Funky, Groove, Bossa Nova, Samba Rock e o Indie/Alternativo nacional e internacional! Suas maiores influências são Beatles e Supercombo, uma mistura de melodias entre acordes maiores felizes até aquele acorde menor mais melancólico possível! Os hobbies como videogame, animes, cinema, também é uma fonte de inspiração para as composições e para a personalidade como um todo"
    ], photo: "assets/davi.png"},
   
    {name: "João", lastName: "Pessoa", about: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"], photo: "assets/joao.png"},
    
    {name: "Cristiano", lastName: "Fagundes", about: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"], photo: "assets/cris.png"},
  ]

}
