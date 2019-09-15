import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

function titleCase(str) {
  return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _HTTP: HttpClient) {
    this.getPokemon();
  }


  getPokemon() {
    const randNum: number = Math.floor(Math.random() * 807 + 1);
    const pokemon = this._HTTP.get(`https://pokeapi.co/api/v2/pokemon/${randNum}/`);
    pokemon.subscribe((data: any) => {
      console.log(`Caught our Pokemon! It's a ${titleCase(data.name)}`, data);
      console.log('*****ABILITIES*****');
      const abilities = data.abilities;
      for (const i of Object.keys(abilities)) {
        console.log(titleCase(abilities[i].ability.name));
      }
      for (const i of Object.keys(abilities)) {
        const ability = this._HTTP.get(`${abilities[i].ability.url}`);
        ability.subscribe((info: any) => {
          console.log(`Other Pokemon with Ability: ${info.names[2].name}`);
          const otherPoke = info.pokemon;
          for (const j of Object.keys(otherPoke)) {
            console.log(titleCase(otherPoke[j].pokemon.name));
          }
        });
      }
    });
  }
}
