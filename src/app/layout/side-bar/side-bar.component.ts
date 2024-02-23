import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, NgModule, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule,RouterModule,MatTooltipModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  @Input() menuList: any = [];



  state = 'open';



  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }



  ngOnInit(): void {



    this.menuList = [

      {

        icon: 'fa-tachometer',

        name: 'System Administrator'

      },

      {

        icon: 'fa-area-chart',

        name: 'Private Warehouses'

      },

      {

        icon: 'fa-shopping-cart',

        name: 'Spots Events Clearing Agency Authorization'

      },

      {

        icon: 'fa-shopping-bag',

        name: 'Registration'

      },

      {

        icon: 'fa-book',

        name: 'Cargo Manifest'

      },

      {

        icon: 'fa-cog',

        name: 'Detained Goods'

      },
      {

        icon: 'fa-cog',

        name: 'Declaration'

      },
      {

        icon: 'fa-cog',

        name: 'Tariff Management'

      },

    ]



  }





  toggleSidebar(): void {

    this.renderer.removeClass(document.body, this.state);

    this.state = this.state === 'open' ? 'close' : 'open';

    this.renderer.addClass(document.body, this.state);

  }
}
