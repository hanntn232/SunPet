import { Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-admin-blogtrangchu',
  templateUrl: './admin-blogtrangchu.component.html',
  styleUrls: ['./admin-blogtrangchu.component.css']
})
export class AdminBlogtrangchuComponent implements OnInit {
  readonly VAPID_KEY ='BJm-yUuPfWmTyMhHcIO6xtieZ3cssMAAJedHTRrHuWdZMYtjQ6Gbw3r6QIjMDWzBFiE-MJKQ4edx-EX481Kp1mc'

  constructor(private _swU: SwUpdate, private _swP: SwPush,private _service:NotificationService ) { }

  ngOnInit(): void {
  }
  pushNotiDelete(){
    if (this._swU.isEnabled) {
      console.log("OKKKKKKK")
      this._swP.requestSubscription({
        serverPublicKey: this.VAPID_KEY
      }).then((info) => {
        this._service.sendNotification(info).subscribe();
        console.log("Hi")
      })
    }
  }
}
