import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  // user: User;
  filterTerm: string;

  // constructor(private menu: MenuController, private authService: AuthService) { }
  constructor(
    private navCtrl: NavController,
  ) { }

  userRecords = [{
    "id": 1,
    "name": "Kiran B",
    "email": "kiran@gmail.com",
    "gender": "male"
  },
  {
    "id": 2,
    "name": "Pratik Patil",
    "email": "pratik@gmail.com",
    "gender": "male"
  },
  {
    "id": 3,
    "name": "Sparsha Jain",
    "email": "sparsha@gmail.com",
    "gender": "female"
  },
  {
    "id": 4,
    "name": "Mahantesh",
    "email": "mahantesh@gmail.com",
    "gender": "male"
  },
  {
    "id": 5,
    "name": "Shradha G",
    "email": "shradha@gmail.com",
    "gender": "female"
  },
  {
    "id": 6,
    "name": "Padmaja",
    "email": "padu@gmail.com",
    "gender": "female"
  },
  {
    "id": 7,
    "name": "Mahaveer Patil",
    "email": "mahaveer@gmail.com",
    "gender": "male"
  },
  {
    "id": 8,
    "name": "Deepak H",
    "email": "deepak@gmail.com",
    "gender": "male"
  },
  {
    "id": 9,
    "name": "Srinivas Kamath",
    "email": "srini@gmail.com",
    "gender": "male"
  },
  {
    "id": 10,
    "name": "pratiksha J",
    "email": "pratiksha@gmail.com",
    "gender": "female"
  }
  ]
  logout() {
    this.navCtrl.navigateRoot('/login');
  }
  ngOnInit() {

  }
}