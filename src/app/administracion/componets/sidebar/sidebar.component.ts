import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { 
    
    //para el llamado de sidenav
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });

    //para el dropdown
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
       
  }

  ngOnInit() {
  }

}
