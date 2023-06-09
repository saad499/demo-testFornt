import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {



  username: string = '';
  password: string = '';

  constructor(private userService: UserService,private router:Router) { }
  signIn(){
    this.userService.signIn(this.username, this.password)
      .subscribe(
        (user:User) => {
          console.log('Connexion avec succès : ', user);
          this.router.navigate(['/dashboard']);
        },(error:any)=>{
          console.log('Erreur lors de la connexion : ', error);
        }
      );
  }
  ngOnInit(): void {
    
  }

}
