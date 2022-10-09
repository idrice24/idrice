import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AppUser } from './shared/models/app-user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryDbService {
  createDb(){
    const users = [
    {id: 11, name: 'idrice', username: 'idrice24', email:'idrice@yahoo.com', password: '0000', isAdmin: true },
    
    ];

// Important!! Name of array is the name of in api url ---> api/users
return {
  users
        };
  }
}
