import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
// import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifi_api_url: string = 'http://localhost:3000/push'
  constructor(private _http: HttpClient) { }
  sendNotification(info: PushSubscription) {
    return this._http.post(this.notifi_api_url, info).pipe(
      catchError(this.handleError)
    )
  }
  handleError(err: Error) {
    return throwError(() => new Error(err.message))
  }
}

