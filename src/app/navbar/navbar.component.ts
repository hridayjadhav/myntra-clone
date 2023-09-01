import { Component } from '@angular/core';
import { faCircleUser, faHeart, faShoppingBag, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userIcon = faCircleUser;
  heartIcon = faHeart;
  bagIcon = faShoppingBag;
  searchIcon = faMagnifyingGlass;
  menuIcon = faBars;


  
}
