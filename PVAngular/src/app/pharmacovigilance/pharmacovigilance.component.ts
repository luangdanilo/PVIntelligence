import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-pharmacovigilance',
  templateUrl: './pharmacovigilance.component.html',
  styleUrls: ['./pharmacovigilance.component.scss']
})
export class PharmacovigilanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // ngAfterViewChecked(): void{
  //   $(document).ready(function () {
  //     $('#vmap').vectorMap({
  //       map: 'world_en',
  //       backgroundColor: '#fff',
  //       color: '#ffffff',
  //       hoverOpacity: 0.7,
  //       selectedColor: '#666666',
  //       enableZoom: true,
  //       showTooltip: true,
  //       scaleColors: ['#C8EEFF', '#006491'],
  //       normalizeFunction: 'polynomial'
  //     });
  //   });

  // }
}

