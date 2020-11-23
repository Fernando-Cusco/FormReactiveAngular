import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'forms';

  form: FormGroup;
  usuario: Usuario = new Usuario();

  ngOnInit() {
    this.form = new FormGroup({
      nombres: new FormControl(this.usuario.nombres,[Validators.pattern(/^[A-Za-z ]+$/), Validators.required]),
      apellidos: new FormControl(this.usuario.apellidos, [Validators.pattern(/^[A-Za-z ]+$/), Validators.required]),
      edad: new FormControl(this.usuario.edad, [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.form);
    
  }


}
