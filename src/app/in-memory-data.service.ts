import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const appUser = [
      {id: 1, name: 'Dr. idrice'}];

    const products = [
      {id:1, name: 'School Management System', createdDate: 01/08/2023 }];

    const blogs = [
      {id: 1, name: 'School Management System', createdDate: 02/03/2023 }];


    return {appUser, products, blogs};
  }
}
