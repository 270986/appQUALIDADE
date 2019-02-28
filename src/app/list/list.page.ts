import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'logo-buffer',
    'stats',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
      this.items.push({
        title: 'Manual da Qualidade',
        note: '+',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      this.items.push({
        title: 'Objetivo da Qualidade',
        note: '+',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      this.items.push({
        title: 'Política da Qualidade',
        note: '+',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      this.items.push({
        title: 'Procedimentos',
        note: '+',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      this.items.push({
        title: 'Instruções de trabalho',
        note: '+',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      this.items.push({
        title: 'Formulários',
        note: '+',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      this.items.push({
        title: 'Partes interessadas',
        note: '+',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      this.items.push({
        title: 'Analise de Risco e Oportunidades',
        note: '+',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      this.items.push({
        title: 'Analise de contexto',
        note: '+',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      this.items.push({
        title: 'Plano de Ação',
        note: '+',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      this.items.push({
        title: 'Analise de Processo',
        note: '+',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      this.items.push({
        title: 'Certificado',
        note: '+',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      this.items.push({
        title: 'Tabela de registro',
        note: '+',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      this.items.push({
        title: 'Descrição de Cargos',
        note: '+',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
