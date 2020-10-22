import {Component} from '@angular/core';
import {catchError, take} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth/auth.service';
import {FEED} from '../../consts/routes.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user$: Observable<firebase.User> = this.auth.user$;

  constructor(
    private readonly auth: AuthService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router,
  ) {
  }

  login(): void {
    this.auth
      .loginViaGoogle()
      .pipe(
        take(1),
        catchError((error) => {
          this.snackBar.open(`${error.message} 😢`, 'Close', {
            duration: 4000,
          });
          return EMPTY;
        }),
      )
      .subscribe(
        (response) =>
          response &&
          this.snackBar.open(
            `Oh! You're here. I demand that you feed me. 😾`,
            'Close',
            {
              duration: 4000,
            },
          ),
      );
  }

  logout(): void {
    this.auth
      .logout()
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate([`/${FEED}`]);
        this.snackBar.open('Come back soon with treats! 😿', 'Close', {
          duration: 4000,
        });
      });
  }
}
