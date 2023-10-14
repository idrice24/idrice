import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blogs } from '../models/blogs';
import { AppComment } from '../models/app-comment';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { LogService } from './log.service';


@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private baseUrl = '/assets/data/blogs.json';
  blog!: Blogs;
  private comments!: Comment[];

  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient, private logService: LogService) {

   }

   //TODO find out the best way to call standard httpClient
   getBlogList(): Observable<Blogs[]>{
    return this.httpClient.get<Blogs[]>(this.baseUrl);
   }

   /** PUT: update the blog on the server */
   updateBlog(blog: Blogs): Observable<any>{
    return this.httpClient.put(this.baseUrl, blog, this.httpOptions).pipe(
      tap(_ => this.log(`updated blog id=${blog.id}`)), catchError(this.handleError<any>('updateBlog'))
    );
   }

   /** GET: get Blog by Id */
   getBlogById(id: number | string){
    return this.httpClient.get<Blogs[]>(this.baseUrl).pipe(
      // (+) before `id` turns the string into a number
      map((blogs: Blogs[]) => blogs.find(blogs => blogs.id === +id))
    );
   }

   /** GET: get blogs from the server */

   getBlogs(): Observable<Blogs[]>{
    return this.httpClient.get<Blogs[]>(this.baseUrl).pipe(
      tap((blogList: Blogs[]) => this.logService.log(blogList)),
      catchError(this.handleError<Blogs[]>('getBlog', []))
    );
   }

   /** DELETE: REMOVE  blog from DB */
  deleteAppBlog(blog: Blogs | number): Observable<Blogs> {
    const id = typeof blog === 'number' ? blog : blog.id;
    const url = `${this.baseUrl}/${id}`;

    return this.httpClient.delete<Blogs>(url, this.httpOptions).pipe(

      catchError(this.handleError<Blogs>('deleteBlog'))
    );
  }

   /** GET: get comment  */

   getAppComment(blog: Blogs): Observable<Blogs[]>{
    return this.httpClient.get<Blogs[]>(this.baseUrl).pipe(
      tap((commentList: Blogs[]) => this.logService.log(commentList)),
      catchError(this.handleError<Blogs[]>('getAppComment', []))
    );
   }

   /** Handle Http operation that failed. Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
   private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
   }

   /**Log a BLogService message with the MessageServcie */
   private log(message: string){
    //thiis.messageService.add(`BlogService: ${message}`);
    console.warn(`BlogService: ${message}`);
   }
}
