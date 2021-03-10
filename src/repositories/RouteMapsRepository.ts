class RouteMapsRepository {

  public combineAdressesForRequest(adresses: string[]): Object[]{
  /*
    Criação de matriz para calcular o trajeto entre 2 distâncias sem que haja repetição, no algoritmo abaixo, usa-se
    só alguns elementos da diagonal principal superior para pegar a combinação linha (endereço 1) + coluna (endereço 2) necessária.
  */  

  let combined_adresses = [];
  let count_column = 1;
  for(let line = 0; line < adresses.length; line++){
    for(let column = count_column; column < adresses.length; column++){
      combined_adresses.push({origin: adresses[line], destination: adresses[column]})
    }
    count_column += 1;
  }

  return combined_adresses;
  }
}

export default RouteMapsRepository;