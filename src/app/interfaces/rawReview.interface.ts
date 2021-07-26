import { IUser } from './user.interface';

export interface IRawReview {
	rating: number;
	comment: string;
	show_id: string;
	id: string;
	user: IUser;
}
