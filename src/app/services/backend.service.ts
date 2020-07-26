import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseurl = "http://localhost:8000";

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAll(id, paramas): Observable<any>{
    return this.http.get(`${this.baseurl}/ventas/ventas-mes/${id}`, {params: paramas});
  }
  getMenu$(): Observable<any>{    
    return this.http.get(`${this.baseurl}/ventas/menu`);
  }
  login$(data): Observable<any>{    
    return this.http.post(`${this.baseurl}/login`, data);
  }
}