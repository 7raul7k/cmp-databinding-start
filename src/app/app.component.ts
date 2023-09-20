import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit,OnDestroy{
  serverElements = [{type:'server', name:'Testserver', content:'Just a test!'}];
  newServerName = '';
  newServerContent = '';

  onServerAdded(serverData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content:serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content:blueprintData.serverContent
    });
  }

  ngOnInit() {
  }

  onChangeFirst(){
    this.serverElements[0].name = 'Changed!';
  }

  ngOnDestroy() {
  }

    onDestroyFirst(){
    this.serverElements.splice(0,1);
  }
}
