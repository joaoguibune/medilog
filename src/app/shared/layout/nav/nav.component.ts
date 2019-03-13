import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'medlog-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  title:string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
   
    getTitle(state, parent) {
      var data = [];
      if(parent && parent.snapshot.data && parent.snapshot.data.title) {
        data.push(parent.snapshot.data.title);
      }
  
      if(state && parent) {
        data.push(... this.getTitle(state, state.firstChild(parent)));
      }
      return data;
    }


  constructor(private breakpointObserver: BreakpointObserver, public router : Router, public route : ActivatedRoute, public _auth : AuthenticationService) {
    {
      router.events.subscribe(event => {
        if(event instanceof NavigationEnd) {
          var title = this.getTitle(router.routerState, router.routerState.root).join('-');
          this.title = title;
        }
      });
    }
    
  }

  logout(){
    this._auth.logout();
  }

}
