import { Component, OnInit } from '@angular/core';
import {Stagiaire} from '../models/Stagiaire';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {


public listS:Stagiaire[]=[

{
  code:1000,
  nom:"ALAMI",
  prenom:"Ahmed",
  filiere:"TDI"

},
{
  code:2000,
  nom:"KABIRI",
  prenom:"Ali",
  filiere:"TRI"
}

];

  constructor() { }

  ngOnInit() {
    this.listS1=this.listS.slice();
  }



public addStag(c:number,n:string,p:string,f:string)
{
  let x=new Stagiaire(c,n,p,f);
  this.listS.push(x);
}


public deleteStag(s:Stagiaire)
{
  let pos;
    if(confirm("Voulez-vous supprimer"))
    {
      pos=this.getPosition(s.code);

        this.listS.splice(pos,1);
    }
}

public v:Stagiaire;

public get(s:Stagiaire)
{
this.v=s;
}

name="omar";


public changer(s:string)
{
  this.name=s;
}

public updateStag(c:number,n:string,p:string,f:string)
{
 let pos=this.getPosition(c);
 this.listS[pos].nom=n;
 this.listS[pos].prenom=p;
 this.listS[pos].filiere=f;



}

public getPosition(code:number)
{ var pos;

  for(let i=0;i<this.listS.length;i++)
  {
    if(this.listS[i].code==code)
    {
      pos=i;
      break;
    }
  }

  return pos;
}


public listF:string[]=["TDI","TRI","TSGE","TCE"];

listS1:Stagiaire[]=[];

public affiche(s:number,c:string)
{
 
  if(s==0)
  {
    this.listS=this.listS1.slice();
  }
  else
  {
    this.listS= this.listS1.filter(x => x.filiere== c);

  }

}

}
