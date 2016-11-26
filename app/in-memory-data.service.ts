import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService
{
  createDb()
  {
    let heroes =
    [
      { id: 11, name: 'One punch man' },
      { id: 12, name: 'Piperoman' },
      { id: 13, name: 'Vampiro trolaso' },
      { id: 14, name: 'Super Pulpiño' },
      { id: 15, name: 'Soplavelas' },
      { id: 16, name: 'Duende rompeortos' },
      { id: 17, name: 'Gogorcop' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magento' },
      { id: 20, name: 'Agujero tormentoso' }
    ];
    return {heroes};
  }
}
