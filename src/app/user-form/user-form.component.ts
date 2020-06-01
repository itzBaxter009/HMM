import { Component, OnInit } from '@angular/core';

class InicioSesion{
  nsocial: string;
  password: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  user: InicioSesion;
  
  constructor() { 
    this.user=new InicioSesion();
  }

  ngOnInit() {}
ClearData() {
  this.user = new InicioSesion();
}

}
