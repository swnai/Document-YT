import { Component } from '@angular/core';
import { LComponentComponent } from '../content/l-component/l-component.component';
import { RComponentComponent } from '../content/r-component/r-component.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
{HeaderComponent}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LComponentComponent, RComponentComponent, SidebarComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
