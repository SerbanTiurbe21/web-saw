import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/interfaces/auth/registerrequest.model';
import { AuthenticationResponse } from 'src/app/interfaces/auth/authenticationresponse.model';
import { AuthenticationRequest } from 'src/app/interfaces/auth/authenticationrequest.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private url = 'http://localhost:8081/api/v1/auth';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnDestroy(): void {}

  register(
    registerRequest: RegisterRequest
  ): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(
      `${this.url}/register`,
      registerRequest
    );
  }

  authenticate(
    authRequest: AuthenticationRequest
  ): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(
      `${this.url}/authenticate`,
      authRequest
    );
  }
}
