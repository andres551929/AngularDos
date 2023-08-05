import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';


const listMascota: Mascota[] = [
{nombre: 'elver', edad: 3, raza: 'golden', color: 'dorado', peso: 13},
{nombre: 'camilo', edad: 8, raza: 'labrador', color: 'gris', peso: 2},
{nombre: 'ramiro', edad: 7, raza: 'golden', color: 'negro', peso: 3},
{nombre: 'sapo', edad: 4, raza: 'pincher', color: 'dorado', peso: 6},
{nombre: 'lupe', edad: 24, raza: 'golden', color: 'morado', peso: 4},
{nombre: 'perro', edad: 23, raza: 'golden', color: 'verde', peso: 13},
{nombre: 'firulais', edad: 1, raza: 'criollo', color: 'rojo', peso: 12},
{nombre: 'turba', edad: 6, raza: 'pug', color: 'amarillo', peso: 4},
];

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.css']
})
export class ListadoMascotasComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'peso' , 'color', 'acciones'];
  dataSource = new MatTableDataSource<Mascota>(listMascota);
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.paginator._intl.itemsPerPageLabel = 'Items por pagina'
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarMascota() {
    this.loading=true;
    setTimeout(() => {
      this.loading=false;
      this._snackBar.open('La mascota fue eliminada con exito', '', {
        duration: 2000,
        horizontalPosition: 'right'
      });
    }, 3000);
  }
}
