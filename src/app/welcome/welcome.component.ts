import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  btnClick= function () {
    this.router.navigateByUrl('Welcome/register');
};
}
