import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Animal } from 'app/models/animal';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	public animals: Animal[] = [];
	public ornithorynque: Animal;
	public kangourou: Animal;
	public paresseux: Animal;

	constructor(private _snackBar: MatSnackBar) {
		this.animals.push(
			(this.ornithorynque = new Animal(
				'Monotrèmes',
				'Ornithorynque',
				'https://lh5.googleusercontent.com/6O62o4YRHAxDGN8YkEkGsJCOEcCP4aaNDpG_f1K72OqRNc1kiBqCQHvSHVKTYm--wcAatNNnDgUBe7PElxWDeAiAoqOvtvhWxZylh5A7zs8W49T7o7JSNlml4R7PCY8sN_dvWpjY'
			)),
			(this.kangourou = new Animal(
				'Marsupiaux',
				'Kangourou',
				'https://images-na.ssl-images-amazon.com/images/I/71EPSIZlLBL._AC_SY355_.jpg'
			)),
			(this.paresseux = new Animal(
				'Xénarthres',
				'Paresseux à gorge brunbe',
				'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/6/6/c66a17731d_45692_unau-slothdwa.jpg'
			))
		);
	}

	/* Fonction de suppression d'animal (l'enleve du tableau) */
	deleteAnimal(animal: Animal): void {
		// console.log('deleteAnimalClick() received, this.animal.id : ', animal);
		const animalIndex = this.animals.indexOf(animal);
		const animalNom = animal.getNom();
		if (animalIndex !== -1) {
			this.animals.splice(animalIndex, 1);
			this.openSnackBar({ message: `${animalNom} a été supprimé`, action: 'x' });
		} else console.log('(Home.deleteAnimal(animal:Animal) > splice didnt succeed : Throw error here');
	}

	/* Barre qui s'affiche lorseque je supprime un élement : */
	async openSnackBar({ message, action }: { message: string; action: string }) {
		this._snackBar.open(message, action, {
			duration: 3000,
			panelClass: ['mat-snackbar-bottom'],
		});
	}

	onFormSubmit(animal: Animal): void {
		this.animals.push(animal);
	}

	ngOnInit(): void {}
}
