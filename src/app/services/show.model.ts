import { IRawShow } from "../interfaces/rawShow.interface";

export class Show {

    constructor(rawShowData: IRawShow) {
        this.title = rawShowData.title;
        this.description = rawShowData.description || '';
        this.averageRating = rawShowData.average_rating;
        this.imageUrl = rawShowData.image_url;
        this.id = rawShowData.id;
    }

    title: string;
    description: string;
    averageRating: number;
    imageUrl: string;
    id: string;
}