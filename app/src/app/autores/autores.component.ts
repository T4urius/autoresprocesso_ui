import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../services/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  constructor(private autoresService: AutoresService) { }

  autores: any[] = [];

  ngOnInit() {
    this.obterAutores()
  }

  obterAutores() {
    debugger;
    this.autoresService.obterAutores()
      .subscribe(result => {
        console.log(result);
        this.autores = result;
      }, err => {
        console.log(err);
      });
  }

  inserirAutores(idAutor: number) {
    // this.autoresService.inserirAutores(idAutor, nomeAutor)
    //   .subscribe(result => {
    //     console.log(result);
    //   }, err => {
    //     console.log(err);
    //   })
  }

}
