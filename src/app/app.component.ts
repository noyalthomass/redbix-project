import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './components/content/content.component';
import {TranslateLoader, TranslateModule, TranslateStore,} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateService} from "@ngx-translate/core";
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SideBarComponent,HeaderComponent,ContentComponent,HttpClientModule,
     TranslateModule],
  providers:[TranslateService,TranslateStore,{ provide: TranslateLoader,
    useFactory: HttpLoaderFactory,}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  title = 'redbix-project';
}

