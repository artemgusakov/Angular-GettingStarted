import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        'productId': 1,
        'productName': 'Leaf Rake',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2016',
        'description': 'Leaf rake with 48-inch wooden handle.',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'https://image.flaticon.com/icons/svg/1653/1653783.svg'
      },
      {
        'productId': 2,
        'productName': 'Garden Cart',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2016',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'https://image.flaticon.com/icons/svg/1653/1653782.svg'
      },
      {
        'productId': 5,
        'productName': 'Hammer',
        'productCode': 'TBX-0048',
        'releaseDate': 'May 21, 2016',
        'description': 'Curved claw steel hammer',
        'price': 8.9,
        'starRating': 4.8,
        'imageUrl': 'https://image.flaticon.com/icons/svg/1653/1653798.svg'
      }]
  }
}
