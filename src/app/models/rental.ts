export interface Rental {
    Id:number;
    carId:number;
    customerId:number;
    rentDate:Date;
    companyName?:string;
    returnDate:Date;
    totalRentPrice:number;

}