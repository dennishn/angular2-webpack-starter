/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  // encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `
    <nav>
      <a [routerLink]=" ['./'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Index
      </a>
      <a [routerLink]=" ['./home'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Home
      </a>
      <a [routerLink]=" ['./detail'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Detail
      </a>
      <a [routerLink]=" ['./barrel'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Barrel
      </a>
      <a [routerLink]=" ['./about'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        About
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
      <button class="button">Test globally styles Foundation Button (and global variables file with primary set to tomaty!</button>
    </main>
    
    <div class="row">
      <div class="small-12 columns">
        <div class="bg bg--png"></div>
        <div class="bg bg--jpg"></div>
        <div class="bg bg--jpeg"></div>
        <div class="bg bg--gif"></div>
        <div class="bg bg--svg"></div>
      </div>
    </div>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="25%">
        </a>
      </div>
    </footer>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  private logStyles = [
    'display: block',
    'line-height: 20px',
    'font-weight: bold',
    'text-align: center'
  ];

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    switch(ENV) {
      case 'development':
        this.logStyles.push('color: red');
        break;
      case 'staging':
        this.logStyles.push('color: orange');
        break;
      case 'production':
        this.logStyles.push('color: green');
        break;
      default:
        this.logStyles.push('color: red');
    }

    console.log(`%c App runnin on environment mode: ${ENV}`, this.logStyles.join(';'));

    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
