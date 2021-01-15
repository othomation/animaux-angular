import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from 'app/models/animal';
@Component({
	selector: 'app-animal',
	templateUrl: './animal.component.html',
	styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
	@Input() animal: Animal;
	@Output() private deleteAnimalEvent: EventEmitter<Animal>;

	constructor() {
		this.deleteAnimalEvent = new EventEmitter<Animal>();
	}

	ngOnInit(): void {}

	/* Envoit l'evenement de suppression au clic du boutton supprimre */
	deleteAnimalClick(): void {
		// console.log('deleteAnimalClick() emitted, this.animal.id : ', this.animal);
		this.deleteAnimalEvent.emit();
	}
}
