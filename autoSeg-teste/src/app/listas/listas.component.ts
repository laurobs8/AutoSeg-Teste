import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css'],
})
export class ListasComponent implements OnInit {


  usuario = 'Usuario 1';

  tarefas: any = [
    { tarefa: ['Tarefa 1'], subtarefa: ['subtarefa 1'] },
    { tarefa: 'Tarefa 2', subtarefa: 'subtarefa 2' },
    { tarefa: 'Tarefa 3', subtarefa: 'subtarefa 3' },
  ];

  novaTarefa: any = this.tarefas;

  dado = '';

  constructor() { }

  ngOnInit() {
  }

  add(novaTarefa: any) {
    console.log(this.dado);
    novaTarefa = this.tarefas.push(`${this.dado}`);
    this.tarefas.tarefa = this.novaTarefa;
    console.log(this.tarefas);

    // this.tarefas[].tarefa.push(this.dado);
    debugger;
  }
}
