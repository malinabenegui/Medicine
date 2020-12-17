import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  toggle = false;
  dropdownClass;

  constructor() {
  }

  ngOnInit(): void {
  }


  setDropdown(): void {
    this.toggle = !this.toggle;
    this.dropdownClass = this.toggle ? 'show' : '';
  }

}
