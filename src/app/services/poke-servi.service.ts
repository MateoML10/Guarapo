import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeServiService {
  api : string = 'https://pokeapi.co/api/v2/pokemon/'  
  api_abilities: string ='https://pokeapi.co/api/v2/pokemon'
  api_about:string='https://pokeapi.co/api/v2/ability'
  constructor(public http : HttpClient) { }

  // LLama la API
  getAllPokemon(){
    return this.http.get(this.api);
  }

  getAllInformation(name : string){
    return this.http.get(this.api_abilities+`/${name}`);
  }

  getInfoAbout(name: number){
    return this.http.get(this.api_about+ `/${name}`)    

  }


}


