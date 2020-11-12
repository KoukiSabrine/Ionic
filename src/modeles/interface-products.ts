

export interface product{
    createdAt: Date;
    title:string;
    description:string;
    price:number;
    pictures:string[];
    id:string;
    categorie:string;
    availability:Availability;
    averageStar:number;
   
}
export interface Availability {
    available: boolean;
    type: string;
    feed ?:number;
}