import { Component, OnInit } from '@angular/core';
import { User } from './common/user';
import { UserService } from './services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FeleceTicketApp';
  public users!:User[];
  public currentuser!:User;

  constructor(private userService:UserService){}

  ngOnInit() {
    
  }

  public getUserList(): void {
    this.userService.getUserList().subscribe(
      (response: User[]) => {
        this.users = response;
        console.log(this.users);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public hide(): void {
    let x = document.getElementById("trainlist");
    if (x != null) {
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
  }

  public hide2(): void {
    let x = document.getElementById("searchdiv");
    if (x != null) {
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  }

  public refresh():void{
    window.location.reload()
  }

  public onOpenModal(user:User|null,mode:String):void{
    console.log('onopenmodal');
    const div=document.getElementById('topbar')
    const button=document.createElement('button');
    button.type='button'; 
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode=='login')
    {
      button.setAttribute('data-target','#loginModal');
    }
    if (mode=='signup')
    {
      button.setAttribute('data-target','#signUpModal');
    }
    div?.appendChild(button);
    button.click();
  }

  public onAddUser(userAddForm:NgForm):void{
    document.getElementById('closeButton')?.click();
    this.userService.addUser(userAddForm.value).subscribe(
      (response:String)=>{
        console.log(response);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }





}
