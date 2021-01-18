import { Component, EventEmitter, Input, isDevMode, OnInit, Output } from '@angular/core';
import { Animal } from 'app/models/animal';
@Component({
	selector: 'app-animal',
	templateUrl: './animal.component.html',
	styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
	@Input() animal: Animal;
	@Output() private deleteAnimalEvent: EventEmitter<Animal>;
	@Output() private editAnimalEvent: EventEmitter<Animal>;
	constructor() {
		this.deleteAnimalEvent = new EventEmitter<Animal>();
		this.editAnimalEvent = new EventEmitter<Animal>();
	}

	ngOnInit(): void {}

	/* Envoit l'evenement de suppression au clic du boutton supprimer */
	deleteAnimalClick(): void {
		this.deleteAnimalEvent.emit();
	}
	/* Envoie l'evenement de l'édition au clic du boutton editer */
	editMode(animal: Animal): void {
		this.editAnimalEvent.emit(animal);
	}
}
