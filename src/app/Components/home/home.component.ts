import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Component, ViewEncapsulation, ViewChild ,OnInit} from "@angular/core";
import { SwiperComponent } from "swiper/angular";
SwiperCore.use([Autoplay, Pagination, Navigation]);



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
