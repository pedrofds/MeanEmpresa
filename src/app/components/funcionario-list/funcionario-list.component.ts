import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})

export class FuncionarioListComponent implements OnInit {
  
  Funcionario:any = [];

  constructor(private apiService: ApiService) { 
    this.readFuncionario();
  }

  ngOnInit() {}

  readFuncionario(){
    this.apiService.getFuncionarios().subscribe((data) => {
     this.Funcionario = data;
    })    
  }

  removeFuncionario(funcionario, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteFuncionario(funcionario._id).subscribe((data) => {
          this.Funcionario.splice(index, 1);
        }
      )    
    }
  }

}