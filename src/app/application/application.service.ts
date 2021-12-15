import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private httpClient: HttpClient) { }

  getApplicationList() {
    return this.httpClient.get<any>(`${environment.apiUrl}/application/application-list`);
  }

  updateOutageStatus(reqbody: any){
      return this.httpClient.put<any>(`${environment.apiUrl}/application/update-status`, reqbody);
  }

}