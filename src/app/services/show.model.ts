export class Show {

    constructor(rawShowData: any) {
        this.title = rawShowData.title;
        this.description = rawShowData.description;
        this.averageRating = rawShowData.average_rating;
        this.imageUrl = rawShowData.image_url;
    }

    title: string;
    description: string;
    averageRating: number;
    imageUrl: string;
}