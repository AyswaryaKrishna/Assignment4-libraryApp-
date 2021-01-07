import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorModel } from '../author-list/author.model';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {

  title:String = "Add author";


  constructor(private AuthorService: AuthorService,
              private router: Router) { }
 //using ngModel gets form data binded
  author_Item = new AuthorModel(null,null,null,null,null,null,null,null,null);
  ngOnInit(): void {
  }

  AddAuthor(){
    this.AuthorService.newAuthor(this.author_Item);
    console.log("Called");
    console.log(this.author_Item);
    alert("Success");
    this.router.navigate(['/author']);
  }
}
