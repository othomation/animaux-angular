import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ordre } from 'app/models/ordre.type';
import { Animal } from '../models/animal';

@Component({
	selector: 'app-formulaire',
	templateUrl: './formulaire.component.html',
	styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
	@Output() formSubmitEvent: EventEmitter<Object>;
	@Input() populateTheForm: EventEmitter<Animal>;
	public isEditMode: Boolean = false;
	public original: Animal;
	@Output() enableEditMode: EventEmitter<Boolean>;
	constructor() {
		// this.isEditMode = false;
		this.formSubmitEvent = new EventEmitter<Object>();
		this.enableEditMode = new EventEmitter<Boolean>();
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

	onSubmit(animalForm: NgForm): void {
		let animalSaisi = new Animal(this.ordre, this.nom, this.imageUrl);
		this.formSubmitEvent.emit({ original: this.original, animalSaisi });
		this.resetForm(animalForm);
		this.cancelEditMode(animalForm);
	}

	populateForm(animal: Animal): void {
		this.nom = animal.getNom();
		this.ordre = animal.getOrdre();
		this.imageUrl = animal.getImageUrl();
		this.original = new Animal(this.ordre, this.nom, this.imageUrl);
	}
	resetForm(animalForm: NgForm): void {
		animalForm.resetForm();
	}

	cancelEditMode(animalForm: NgForm): void {
		this.isEditMode = false;
		animalForm.resetForm();
	}
	ngOnInit(): void {
		this.populateTheForm.subscribe((animal) => {
			console.log(animal, ' will populate the form now');
			this.populateForm(animal);
			this.isEditMode = true;
		});
	}
}
