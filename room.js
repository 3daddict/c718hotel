

class Room{
	constructor(currentHotel){
		this.occupant = null; //a customer
		this.hotel = currentHotel;
	}
	addOccupant( customer ){
		this.occupant = customer;
	}
	checkIfOccupied(){
		if(this.occupant)
			return true;

		return false;
	}
	removeOccupant(){

	}
	getRoomService(food){
		this.hotel.getKitchenService();
	}
}