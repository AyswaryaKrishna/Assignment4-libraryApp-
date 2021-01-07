import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { AuthorModel } from '../author-list/author.model';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  id: String ='';

  currentAuthor = null;
  message = '';
  constructor(
              private AuthorService: AuthorService,
              private route: ActivatedRoute,
              private router: Router
             ) { }

  ngOnInit(): void {
    this.message = '';
    this.id=this.route.snapshot.params.id;
    this.getAuthor(this.id);
  }

  getAuthor(id){
    console.log(id);
    this.AuthorService.getAuthorDetails(id)
      .subscribe((author)=>{
        this.currentAuthor = author;
        console.log(author);
      },(error)=>{
        console.log(error);
      });
  }

  updateAuthorDetails(){
    this.AuthorService.updateAuthor(this.currentAuthor._id, this.currentAuthor)
      // .subscribe((response)=>{
      //   console.log(response);
      //   // this.message = 'author Updated';
      //   alert("author Updated Successfully");
      // },(error)=>{
      //   console.log(error);
      // });
      this.router.navigate(['/login']);

  }

  // deleteauthorData(){
  //   this.AuthorService.deleteauthor(this.currentAuthor.id)
  //     .subscribe((response)=>{
  //       console.log(response);
  //       this.router.navigate(['/']);
  //     },(error)=>{
  //       console.log(error);
  //     });
  // }

}
