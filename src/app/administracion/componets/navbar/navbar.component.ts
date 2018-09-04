import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { 
    $(document).ready(function(){
      $('.nav-trigger').dropdown();
    });
  
  }

  ngOnInit() {
    
  }

}
