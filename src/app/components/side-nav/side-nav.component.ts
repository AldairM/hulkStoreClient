import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  
  navs: Array<any>;
  constructor(
    private router: Router
  ) {
    this.navs =[
      {'name': 'Clientes','link': '/home/customer'},      
      {'name': 'Usuarios','link': '/home/user'},
      {'name': 'Generar documentos','link': '/home/generate'},      
      {'name': 'Documentos','link': '/home/documents'},      
      
      {'name': 'Productos','link': '/home/product'},      
    ];
  }

  ngOnInit(): void {
  }

  toggleActive(item: any) {
    this.navs.forEach(m => {
      m.toggleActive = false;
    });
    item.toggleActive = !item.toggleActive;
  }

  navigateTo(item: any) {
    this.toggleActive(item);
    this.router.navigate([item.link]);
  }


}
