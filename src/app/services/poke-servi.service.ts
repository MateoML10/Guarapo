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
  getAllPokemon(url:string){
    if(!url || url.trim().length <=0){
      return this.http.get(this.api);
    }
    return this.http.get(url);
  }

  getAllInformation(name : string){
    return this.http.get(this.api_abilities+`/${name}`);
  }

  getInfoAbout(name: number){
    return this.http.get(this.api_about+ `/${name}`)    

  }


}


