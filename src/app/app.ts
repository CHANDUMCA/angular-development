import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  

  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('angular-learning');

  name: string = 'Madhu';
  firstname: string = '';
  middlename:string='';
  lastname:string='';

  isDisabled: boolean = true;
  showMessage() {
  alert('Hello from Aacharya 👋');
}


  
  sayHello() {
  return `Hello ${this.name}, welcome to Angular`;
}
  sayAng(){
    return `mass`;
  }
}
