import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pastel } from '../../service/Pastel';
import { ConsumogitService } from '../../service/consumogit.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  pasteles: Pastel[];
  dato: any;
  pastel = [];

  constructor(private router: ActivatedRoute, private servGit: ConsumogitService) {}

  ngOnInit() {
    this.router.paramMap.subscribe(r => {
      this.dato = r.get('id');
    });
    this.obtenerPastel();
  }

  obtenerPastel(){
    this.servGit.getPasteles().subscribe(r => {
      this.pasteles = r;
      this.pastel.push(this.pasteles[this.dato - 1]);
    });
  }

}
