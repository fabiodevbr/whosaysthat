import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  opcoes = [
    { id: 'opcao1', texto: 'Opção 1' },
    { id: 'opcao2', texto: 'Opção 2' },
    { id: 'opcao3', texto: 'Opção 3' },
    { id: 'opcao4', texto: 'Opção 4' }
  ];
  opcaoSelecionada: any;

  marcarOpcao(opcao: any) {
    this.opcaoSelecionada = opcao;
  }

  continuar() {
    if (this.opcaoSelecionada) {
      console.log('Você escolheu: ', this.opcaoSelecionada.texto);
      // Aqui você pode adicionar lógica adicional, como enviar a escolha para o servidor, etc.
    } else {
      console.log('Por favor, escolha uma opção.');
    }
  }
}
