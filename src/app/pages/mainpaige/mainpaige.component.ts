import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mainpaige',
  templateUrl: './mainpaige.component.html',
  styleUrls: ['./mainpaige.component.css']
})
export class MainpaigeComponent implements OnInit {
  

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

}
