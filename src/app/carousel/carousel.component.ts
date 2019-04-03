import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/services/api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  data: Array<any> 
  loading = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.loading = true;
    this.apiService.get().subscribe(data => {
      this.data = data;
    },
    error => {console.log(error)},
    ()=>{
      this.loading = false
      console.log(this.loading)
    })
  }
}
