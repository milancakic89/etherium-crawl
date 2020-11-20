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
import { BlockResultComponent } from './block-result/block-result.component';

const routes: Routes = [
  { path: 'block/:id', component: BlockResultComponent },
  { path: '', component: ResultsComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    ItemComponent,
    BlockResultComponent
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
