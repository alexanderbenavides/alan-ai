import { Component, OnInit } from '@angular/core';
import { AlanaiService } from 'src/app/services/alanai.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  fGroup: FormGroup = new FormGroup({});
  constructor(
    private readonly alanaiService: AlanaiService,
    private fb: FormBuilder,
    private httpService: HttpService,
    private router: Router
  ) {

    this.fGroup = this.fb.group({
      user: [''],
      password: ['']
    });
  }

  get fControls() {
    return this.fGroup.controls;
  }

  ngOnInit(): void {
    this.alanaiService.alanBtnInstance.playText('Here is the log in. Do you need some help here ?');
    this.alanaiService.data$.subscribe(alan => {
      if (alan.command === 'filledout') {
        let { user, password } = alan.response;
        user = (user).toLowerCase().replace(' ', '');
        password = password.replace(' ', '');
        this.fControls['user'].setValue(user);
        this.fControls['password'].setValue(password);
        this.loading = true;
        this.userLoggin(user, password);
      }
    });
  }

  private userLoggin(user: string, password: string) {
    this.httpService.saveData('http://localhost:5000/api/v1/auth/login', {email: user, password})
    .subscribe(val => {
      sessionStorage.setItem('userData', JSON.stringify(val.response));
      this.router.navigate(['products']);
    });
  }

}
