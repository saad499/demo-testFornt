import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {



  username!: string;
  password!: string;

  constructor(private router:Router) { }
  signIn(){
    if (this.username === 'saad' && this.password === '123') {
      // Connexion réussie, effectuer les actions nécessaires
      console.log('Connexion réussie');
      this.router.navigateByUrl('/dashboard');
    } else {
      // Identifiants de connexion incorrects
      console.log('Identifiants de connexion incorrects');
    }
  }
  ngOnInit(): void {
    
  }

}
