import { Component } from '@angular/core';
import {ConsumogitService} from '../service/consumogit.service';
import { Pastel } from '../service/Pastel';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  pasteles: Pastel[];
  constructor(private servicegit: ConsumogitService) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.obtenerPasteles();
  }

  obtenerPasteles(){
    this.servicegit.getPasteles().subscribe(r => {
      this.pasteles = r;
    });
  }

}
