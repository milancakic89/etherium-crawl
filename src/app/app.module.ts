import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { ItemComponent } from './results/item/item.component';
import { Service } from './app.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':id', component: SearchComponent },
  { path: '', component: ResultsComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
