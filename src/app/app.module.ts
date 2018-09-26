import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {ParentComponent} from './components/parent/parent.component';
import {ChildComponent} from './components/child/child.component';

import {ObservableService} from './services/observable.service';
import {TestObservableComponent} from './components/test-observable/test-observable.component';
import { PostsService } from './services/posts.service';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TestObservableComponent,
    PostsComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ObservableService,
    PostsService   

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
