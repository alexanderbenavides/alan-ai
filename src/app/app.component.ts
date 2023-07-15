import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlanaiService } from './services/alanai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  dogs: any[] = [];
  commandLoginTouched = false;


  constructor(
    private readonly router: Router,
    private readonly alanaiService: AlanaiService
  ){
  }

  ngOnInit(): void {
    this.alanaiService.data$.subscribe(alan => {
      if (alan.command === 'login') {
        this.router.navigate(['login']);
      } else if (alan.command === 'back') {
        this.router.navigate(['']);
      }
    });

  }
}

