import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ordre } from 'app/models/ordre.type';
import { Animal } from '../models/animal';

@Component({
	selector: 'app-formulaire',
	templateUrl: './formulaire.component.html',
	styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
	@Output() formSubmitEvent: EventEmitter<Animal>;

	constructor() {
		this.formSubmitEvent = new EventEmitter<Animal>();
	}
	public listeDesOrdres = [
		'Monotrèmes',
		'Marsupiaux',
		'Xénarthres',
		'Pholidotes',
		'Insectivores',
		'Carnivores',
		'Chiroptères',
		'Cétacés',
	];
	animal: Animal;
	public nom: string;
	public ordre: Ordre;
	public imageUrl: string;

	onSubmit(): void {
		this.animal = new Animal(this.ordre, this.nom, this.imageUrl);
		this.formSubmitEvent.emit(this.animal);
	}

	ngOnInit(): void {}
}
