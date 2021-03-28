interface adress{
  country?: string | null;
  state?: string | null;
  district?: string | null;
  street: string;
  number: string;
}

interface googleObject{
  rows:{
    elements:{
      distance:{
        value: number;
      }
    }
  }
}

class GetAdressesRepository {

  public concatAdressForRequest(adresses: adress[]): Object[] | Object {
    try{
      let adress;
      let array_adresses: any[] = [];

      adresses.forEach((index: any) => {
        adress = (Object.values(index));
        array_adresses.push(adress.join('+'));
      });
      return array_adresses;
    } catch(error){
        return { code: 500, data: error};
    }
  }

  public combineAdressesForRequest(adresses: Object[]): Object[] | Object {
    try{
      /*
        Criação de matriz para calcular o trajeto entre 2 distâncias sem que haja repetição, no algoritmo abaixo, usa-se
        só alguns elementos da diagonal principal superior para pegar a combinação linha (endereço 1) + coluna (endereço 2) necessária.
      */  

      if(adresses.length <= 1) return { code: 500, data: 'Should be require more than one address' };

      let combined_adresses = [];
      let count_column = 1;
      for(let line = 0; line < adresses.length; line++){
        for(let column = count_column; column < adresses.length; column++){
          combined_adresses.push({origin: adresses[line], destination: adresses[column]})
        }
        count_column += 1;
      }
    
      return combined_adresses;
    } catch(error){
      return { code: 500, data: error};
    }
  }

  public orderAdresses(objects: googleObject[] | any[], order: string): Object[] | Object {
    try{
      let adresses_ordened: googleObject[] = [];

      if (order === 'DESC') adresses_ordened = objects.sort((n1,n2) => n2.rows[0].elements[0].distance.value -
      n1.rows[0].elements[0].distance.value);

      else adresses_ordened = objects.sort((n1,n2) => n1.rows[0].elements[0].distance.value -
      n2.rows[0].elements[0].distance.value);
      
      return adresses_ordened;
    } catch(error){
      return {code: 500, data: error };
    }
  }
}

export default GetAdressesRepository;