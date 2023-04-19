import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
//modulos de estilos
import { PrimeNgModule } from './PrimeNg.module';
import { MaterialModule } from './material.module';

//componentes compartidos
import { AppComponent } from './app.component';
import { ConfirmationService, MessageService } from 'primeng/api';



//heplpers compartidos


//modulos con componentes
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { Sidebar } from 'primeng/sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    PrimeNgModule,
    MaterialModule,
    MatSidenavModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
