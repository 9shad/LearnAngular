import { Component } from '@angular/core'; //to use Component decorator we import Component from core pkg

//@Component decorator tells ts that this is a special class i.e. component and not a normal ts class
@Component({  //we will setup metadata info which tells angyular what to do with this class
    selector: 'app-server',  //should be a string, should be unique, define html tag that we will use later to use this component, usually app-componentName
    templateUrl: './server.component.html', //relative path to html file, mandatory property either this to provide external component template or use "template" to define internal template within ts
    styles:[`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent{
    serverId: number = 10;    //datatype is not needed as it will derive it automatically unless we wise to type it manually
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}