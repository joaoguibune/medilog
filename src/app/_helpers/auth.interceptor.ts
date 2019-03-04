import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        request = request.clone({
            setHeaders: {
                'Content-Type':'application/json'
                
            }
        });
        if (currentUser && currentUser.key) {
            request = request.clone({
                setHeaders: {
                    Authorization: `token ${currentUser.key}`
                }
            });
        }

        return next.handle(request);
    }
}