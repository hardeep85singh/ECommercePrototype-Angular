export class Product{
    // accessToken: string = '';

    constructor(
        public id: string,
        public name: string,
        public imageUrl:string,
        public description: string,
        public department: string[],
        public brand: string,
        public price: number
    ){

    }
}