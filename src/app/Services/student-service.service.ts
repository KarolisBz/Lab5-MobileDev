import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private httpClient:HttpClient) { }

  GetStudentData():Observable<any> {
    return this.httpClient.get('https://www.jsonblob.com/api/jsonblob/1215302231883898880');
  }
}
