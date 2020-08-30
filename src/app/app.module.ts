import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component'; //import from with out the ts extension
import { WarningAlertComponent } from './warning-alert/warning-alert.component';


@NgModule({ //decorator to define a module
  declarations: [ //we regester new components here to let angular know what components to scan for
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent  //ts wont know where to find this class to we need to import as well
  ],
  imports: [        //allows us to include other modules in to this modules, also used if we split a big module in to several smaller modules
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]  //which component to recognize when angular loads index.html file, we wont touch bootstrap array since we wont change the root component
})
export class AppModule { }
