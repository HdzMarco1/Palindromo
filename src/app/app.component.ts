import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Palindromos';

  palindromo:string = '';
  esPalindromo:string = '';

  constructor(){ 
  }

  verificarPalindromo(){
    let sinEspacios:string;
    console.log(this.palindromo);
    
    sinEspacios = this.palindromo.replaceAll(" ", "")


    sinEspacios == sinEspacios.split('').reverse().join().replaceAll(',','') ? this.esPalindromo = 'es palindormo' : this.esPalindromo = 'no es un palindromo';
    
    
    
    

  }
}
