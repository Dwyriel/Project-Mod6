import { Address } from "./address";
import { Rating } from "./rating";

export class User {
    id: string;
    name: string;
    password: string;
    email: string;
    tel: string;
    addressId: string;
    address: Address
    photo: string;
    userType: UserType;
    active: boolean = true;
    avgRating: number;
    ratings: Rating[];
    cart: { productID: string, amount: number }[] = [];

    /**
     * Calculates and attributes the percentage of good/bad ratings to avgRating.
     */
    calculateAvgRating() {
        const totalRatings: number = this.ratings.length;
        var positiveRatings: number = 0;
        this.ratings.forEach(rating => {
            positiveRatings = (rating.recommend) ? ++positiveRatings : positiveRatings;
        });
        this.avgRating = (positiveRatings / totalRatings) * 100;
    }
}

export enum UserType {
    Admin,
    User
}