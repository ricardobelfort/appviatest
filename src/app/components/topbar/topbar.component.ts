import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  title: string = "Controle Financeiro";
  showMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
