import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService:UserService, private formBuilder: FormBuilder, private router: Router){}
  
  newUser!:FormGroup;
  ngOnInit(): void {
    this.newUser = this.formBuilder.group({
      username:this.formBuilder.control("",[Validators.required]),
      email:this.formBuilder.control("",[Validators.required]),
      password:this.formBuilder.control("",[Validators.required]),
    })
  }

  onSubmit(){
    let user = this.newUser.value;
    this.userService.addUser(user).subscribe({
      next:(data)=>{
        console.log("L'inscription a été éffectuer avec succès : ",data);
        this.router.navigateByUrl('/dashboard');
      },error:(err)=>{
        console.log(err);
      }
    })
  }

}
