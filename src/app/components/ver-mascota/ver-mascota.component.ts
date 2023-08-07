import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.component.html',
  styleUrls: ['./ver-mascota.component.css']
})
export class VerMascotaComponent implements OnInit, OnDestroy {
  id!: number;
  mascota!: Mascota;
  loading: boolean = false;
  mascota$!: Observable<Mascota>
  routeSub!: Subscription;
  constructor(private _mascotaService: MascotaService,
    private aRoute: ActivatedRoute) {
    //  this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
  ngOnInit(): void {
    // this.mascota$ = this._mascotaService.getMascota(this.id);
    this.routeSub = this.aRoute.params.subscribe(data => {
      this.id = data['id'];
      this.obtenerMascota(this.id);

    })
  }

  obtenerMascota(id: number) {
    this.loading = true;
    var mascota = this._mascotaService.getMascota(id).subscribe(data => {
      this.mascota = data;
      this.loading = false;

    });
  }

}
