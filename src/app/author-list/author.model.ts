export class AuthorModel{
    constructor(
                  public _id            : string,
                  public authorId      : number,
                  public authorName    : string,
                  public authorCode    : string,
                  public releaseDate    : string,
                  public description    : string,
                  public price          : number,
                  public starRating     : number,
                  public imageUrl       : string
               ){}
  }
  