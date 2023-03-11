import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { properties } from 'src/assets/properties/properties';
import { ApiService } from '../../services/api.service';
import { ConstantUri } from '../../utils/constantUri';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  logo = properties.logo;
  formLogin: FormGroup = new FormGroup({}); //aqui se inicializa la variable vacio y esta fuertemente tipado

  constructor(
    private fb: FormBuilder, //es el contructor del formulario que se llamará a sí mismo, cuando se active el login, primero se activa la varibale
    private readonly apiService: ApiService<any>
  ) { }

  ngOnInit():void {
    this.formLogin = this.fb.group({
      username: [ '', Validators.required, Validators.min, Validators.max],
      password: [ '', Validators.required], //aqui poner inputs edad: [5, Validators.min, Validators.required ] si se busca en minimo y si se quiere poner otro campo se pone coma
    });
  }

  login(){
    if (this.formLogin.invalid){
      this.formLogin.markAllAsTouched();
      for(const key in this.formLogin.controls) {
        //console.log(key);
        this.formLogin.controls[key].markAsDirty();
      }
      return ;
    }

    const {username, password} = this.formLogin.value;

    const body = {
      username,
      password,
      "request_token": sessionStorage.getItem('requestToken')
      //Request_token: " " //COPIAR Y PEGAR LA clave de API de la pagina pelis pagina/icono/ config/api
    }

    const configPost = {url: ConstantUri.validateWithLogin, params: {api_key: ConstantUri.apikey}, body};
    this.apiService.postService(configPost).subscribe(val => { console.log(val)
    });

    console.log(this.formLogin.value); //el formLOgin trae un arreglo con username y password
  }
}
