import React from "react";
import { Country} from './Countries';

/*export const renderIndex = (receta: Weather) => {
    return <h1>{receta.main} Yooo</h1>;
};*/

export const renderCapitals = (countries: Array<Country>) => {
    let columnNum = 5;
    let cont = 0;
    let html = "";
    html += `
    <div class=main>El temps a les capitals del mon</div>
    <table>
      <tr>`;
    for (const country of countries) {
      cont++;
      html +=`<td>
              <p>${country.capitals}</p>
              <p>(${country.name})</p>
              <a href=${country.map}></a>
              </td>`;
      if(cont == columnNum){
        html +=`</tr><tr>`;
        cont = 0;
      }     
    };
      
    return html +`</tr></table>`;
  }