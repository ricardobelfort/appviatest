import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Register } from './models/register.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  title: string = 'Nova Transação';
  registers: Register[] = [];
  selected: string = 'Selecione';
  totalSum: number = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      tipo: [null],
      nome: [null, [Validators.maxLength(100)]],
      valor: [null, [Validators.maxLength(10)]]
    });

    this.load();
  }

  add() {

    const tipo = this.form.controls['tipo'].value;
    const nome = this.form.controls['nome'].value;
    const valor = this.form.controls['tipo'].value === 'compra' ? this.form.controls['valor'].value * -1 : this.form.controls['valor'].value;

    this.registers.push(new Register(tipo, nome, valor));
    this.save();
    this.calc();
    this.form.reset();
  }

  calc() {
    this.totalSum = 0;
    this.registers.forEach(register => this.totalSum = this.totalSum + register.valor);
  }

  save() {
    const data = JSON.stringify(this.registers);
    localStorage.setItem('registers', data);
  }

  load() {
    const data = localStorage.getItem('registers')!;

    if (data !== null) {
      this.registers = JSON.parse(data);
    }

  }

  cleanHistory() {
    localStorage.clear();
    this.registers = [];
  }

}
