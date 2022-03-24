import { Component, OnInit } from '@angular/core';
import { PokeServiService } from 'src/app/services/poke-servi.service';

@Component({
  selector: 'app-poke-home',
  templateUrl: './poke-home.component.html',
  styleUrls: ['./poke-home.component.scss']
})
export class PokeHomeComponent implements OnInit {
  query: any
  url:any
  pokemon : any = [] //arreglo sin mapear
  ability: any=[]
  pokemon_abi : any =[]
  pokemon_about:any=[]
  textoBuscar: string = '' //texto vacio para realizar la busqueda
  textoBuscarabi:string=''
  constructor(public poke: PokeServiService) { }

  // Ejecuta de primero antes de que cargue el HTML
  ngOnInit(): void {
  this.apiRest();
  }

  /*Se realiza la consulta de la API */
  apiRest(){
    this.poke.getAllPokemon().subscribe({
      next : (res: any) => {
      this.pokemon = res.results;
      // console.log(this.pokemon)
      },
      error : (error) => console.log(error)
    })
  }

  apiAbilities(){
    if(this.query!=this.pokemon.name){
      this.poke.getAllInformation(this.query).subscribe({
        next : (info: any)=> {
           this.pokemon_abi = info;
           this.apiAbout(info.id)
          //  console.log(info)
      },
      error : (error)=> console.log(error)
    })
     
    }
   
  }
  apiAbout(id: number){
    if(this.pokemon_abi){
      this.poke.getInfoAbout(id).subscribe({
        next: (abo:any)=>{
          this.pokemon_about=abo;
          // console.log(abo)
          
        },
        error : (error)=> console.log(error)
      })
    }   
      
    
  }


  /* Este metodo captura todo lo que hay en el ts(filtro.pipe.ts)*/
  buscar(event:any){
    this.textoBuscar = event.target.value;
  }
  // buscar2(event:any){
  //   this.textoBuscarabi=event.target.value;
  // }
}

