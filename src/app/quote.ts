 export class Quote {
    showDeScription:boolean;

    constructor(
        public id:number,
        public name:string,
        public description:string,
        public completeDate : Date
    ){
        this.showDeScription =false
    }
}
