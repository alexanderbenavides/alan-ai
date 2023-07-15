import { Component, OnInit } from '@angular/core';
import { AlanaiService } from 'src/app/services/alanai.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  currentId = -1;
  constructor(
    private readonly alanaiService: AlanaiService
  ) { }

  ngOnInit(): void {
    this.alanaiService.data$.subscribe(alan => {
      if (alan.command === 'newUsers') {
        this.products = alan.response;

      }

      if (alan.command === 'highlight') {
        console.log('raaaaaaaaaaaaaa', alan.response);

        this.currentId = alan.response?.id;
      }
    });
  }

}
