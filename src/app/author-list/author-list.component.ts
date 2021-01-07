import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorModel } from './author.model';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  title:String = "author List";

  //author is the model class for a author item
  authors : AuthorModel[];
  //image properties
  imageWidth: number = 50;
  imageMargin: number = 2;

  showImage: boolean =false;

  // currentauthor ?:AuthorModel;
  // currentIndex = -1;


  //creating service object for calling getAuthors()
  constructor(private AuthorService: AuthorService,
              private router: Router) { }

  toggleImage():void{
    this.showImage =!this.showImage;
  }

  ngOnInit(): void {

    this.getAuthorList();

  }

  getAuthorList(){
    //calling getAuthors() and loading to authors[]
    this.AuthorService.getAuthor()
      .subscribe((authordata)=>{
        this.authors = JSON.parse(JSON.stringify(authordata));
    })
  }

  // refresh(){
  //   this.getAuthorList();
  //   this.currentauthor =undefined;
  //   this.currentIndex = -1;
  // }

  // setCurrentauthor(author: AuthorModel, index: number){
  //   this.currentauthor = author;
  //   this.currentIndex = index;
  // }

  onDelete(author:AuthorModel){
    if(confirm('Are you sure to delete this author record ?') == true)
    {
      this.AuthorService.deleteAuthor(author._id)
      //   .subscribe((response)=>{
      //       //console.log(response);
      //     alert("Deleted Successfully");
      //     this.getAuthorList();
      //   // this.router.navigate(['/']);
        this.router.navigate(['/login']);

      // });
    }

    
  }

}
