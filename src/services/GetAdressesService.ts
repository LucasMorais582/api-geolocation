import GetAdressesRepository from '../repositories/GetAdressesRepository';
import { injectable } from 'tsyringe';

interface adress{
  country?: string | null;
  state?: string | null;
  district?: string | null;
  street: string;
  number: string;
}

@injectable()
class RouteMapsService{
  
  constructor(
    private get_adresses_repository: GetAdressesRepository
  ) {}
  
  public execute(object_body: adress[]){
    
    let adresses = this.get_adresses_repository.concatAdressForRequest(object_body);
    return adresses;
  }
}

export default RouteMapsService;