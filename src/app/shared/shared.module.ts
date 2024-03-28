import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthGoogleService } from '../auth/auth-google.service';



@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule  ],
  exports: [
    ToolbarComponent,FooterComponent,MaterialModule,AuthorComponent
  ]
})
export class SharedModule { }
