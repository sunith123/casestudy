export class Payment {

    constructor(
    public  paymentId:String,
	public  bookinId:String,
	public  flightId:String,
	public  noOfPassengers:Number,
	public  priceOfEachTicket:Number,
	public  totalPrice:Number
    ){}
}
