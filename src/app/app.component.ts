import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenue TDI';
 public personne={
    nom:"alami",
    prenom :"ahmed",
    age:30

  };

menus:string[]=["C#","JAVA","VB.NET","C++"];


public add(val:string)
{
  this.menus.push(val);

}

nom:string="KABIRI";


}
