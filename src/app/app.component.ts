import { Component,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import { UserdemoserService } from './userdemoser.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ALLAPI';
  user="string";
  constructor(private userdemoserservice:UserdemoserService ){}
  adduser(formObj:any){
    console.log(formObj)
    this.userdemoserservice.creatuser(formObj).subscribe((Response)=>{
      console.log("user form added")
    })
  }


}
  // name =["title"]

  // username='pytosoft it solutions';
  // companyname='HCL Technology';

  // disabled=true;

  // enableBox(){this.disabled=false} 

  // constructor(private viewContainer:ViewContainerRef,private cfr:ComponentFactoryResolver){}
  // async loadAdmin()
  // {
  //   this.viewContainer.clear();
  //   const {AdminlistComponent} =await import ('./adminlist/adminlist.component');
  //   this.viewContainer.createComponent ( 
  //     this.cfr.resolveComponentFactory (AdminlistComponent))
  // }
  // async loaduser()
  // {
  //   this.viewContainer.clear();
  //   const {userlistComponent} =await import ('./userlist/userlist.component');
  //   this.viewContainer.createComponent ( 
  //     this.cfr.resolveComponentFactory (userlistComponent))
  // // }
  // onSubmit(){}

