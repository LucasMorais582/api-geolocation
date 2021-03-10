interface adress{
  country?: string | null;
  state?: string | null;
  district?: string | null;
  street: string;
  number: string;
}

class GetAdressesRepository {

  public concatAdressForRequest(adresses: adress[]): Object[]{

    let adress;
    let array_adresses: any[] = [];
    
    adresses.forEach((index: any) => {
      adress = (Object.values(index));
      array_adresses.push(adress.join('+'));
    });
    
    return array_adresses;
  }
}

export default GetAdressesRepository;