import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor( private http: HttpClient ) { }

  getAuthor(){
    return this.http.get("http://localhost:3000/author");
  }
 

  newAuthor(item){  
    return this.http.post("http://localhost:3000/authorinsert",{"author":item})
      .subscribe(data =>{console.log(data);})
  }

  getAuthorDetails(id){
    return this.http.get(`http://localhost:3000/author/${id}`);
  }

  updateAuthor(id, item){
    return this.http.put(`http://localhost:3000/author/${id}`, item);
  }

  deleteAuthor(id){
    return this.http.delete(`http://localhost:3000/author/${id}`);
  }
}
