import { IUser } from '../interfaces/user.interface';

export class User {
	constructor(userData: IUser) {
		this.email = userData.email;
		this.image_url = userData.image_url;
		this.id = userData.id;
	}

	email: string;
	image_url: string;
	id: string;
}
