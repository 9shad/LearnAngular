import { Component, OnInit } from '@angular/core';

@Component({ // selector is an optional param, this needs to be unique across Angular application
  selector: 'app-servers', // element selector -> use it as <app-servers></app-servers>, tipically we create element selector for component, we have other options i.e. attribute or class selector based on usecase
  //selector: '[app-servers]', //attribute selector if we use [] -> we render it as <div app-servers></div>
  //selector: '.app-servers', //class selector -> we use it as <div class="app-servers"></div>
  //template: `<app-server></app-server>
  //          <app-server></app-server>`, // '' -> no miltiline string.  `` -> can use multiling string
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css'] //optional attribute   -> external style
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer'; //for twoway binding we will see this value in the text box i.e. TS to UI behavior
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  logs = [];
  toggle = false;

  userName = '';

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is '+ this.serverName;
  }

  onUpdateServerName(event: Event){
     //set event: any to see all properties of event in colsole
     //console.log(event); //check target: input.form-control -> value
     this.serverName = (<HTMLInputElement>event.target).value;   //explicitly casting to input type element
  }

  onUserReset(){
    //clear username when button is clicked
    this.userName = '';
  }

  IsUserEmpty(){
    if(this.userName === '' || this.userName === undefined)
      return true;
    return false;
  }

  toggleDisplay(){
    this.toggle = !this.toggle;
    this.logs.push(new Date());
  }

}
