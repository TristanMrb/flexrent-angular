export interface User {
    user_id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    password_hash: string;
    verified: boolean;
    placeId: number;
    postCode: string;
    city: string;
    street: string;
    house_number: string;
    lessee_rating: number;
    number_of_lessee_ratings: number;
    lessor_rating: number;
    number_of_lessor_ratings: number;
    date_of_birth: Date;
    profile_picture: string;
}