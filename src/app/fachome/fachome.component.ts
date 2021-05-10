import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fachome',
  templateUrl: './fachome.component.html',
  styleUrls: ['./fachome.component.css']
})
export class FachomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  goToLoginPage(){
    this.router.navigate(['./login'])
  }
  goToAttendance()
  {
    this.router.navigate(['home-page'])
  }
  goToSubject()
  {
    this.router.navigate(['home-sub-page'])
  }
}
