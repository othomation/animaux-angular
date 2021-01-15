import { Ordre } from './ordre.type';

export class Animal {
	// private id: string;
	private nom: string;
	private ordre: Ordre;
	private imageUrl: string;
	// private createdAt: string;
	// private updatedAt: string;

	constructor(ordre: Ordre, nom: string, imageUrl: string) {
		this.ordre = ordre;
		this.nom = nom;
		this.imageUrl = imageUrl;
	}

	/* Getter */
	getOrdre(): Ordre {
		return this.ordre;
	}
	
	getNom() {
		return this.nom;
	}
	getImageUrl() {
		return this.imageUrl;
	}

	/* Setters */
	setOrdre(nouvelOrdre: Ordre) {
		this.ordre = nouvelOrdre;
	}
	
	setNom(nouveauNom: string) {
		this.nom = nouveauNom;
	}

	setImageUrl(nouvelleImageUrl: string) {
		this.imageUrl = nouvelleImageUrl;
	}
}
