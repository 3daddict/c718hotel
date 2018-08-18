

class Hotel{
	constructor(){
		this.name = 'marriot';
		this.rooms = [];
		this.staff = [];
	
	}
	//make a customer object with the given name and add to a room.  need to add to a room with no occupants
	checkInCustomer(name){
		var newCustomer = new Customer(name);
		for (var currentRoom = 0; currentRoom < this.rooms.length; currentRoom++) {
			if (this.rooms[currentRoom].occupant === null) {
				this.rooms[currentRoom].addOccupant(newCustomer);
			}
		}
	}
	checkOutCustomer(){

	}
	//make a room and add to rooms array
	addRoom(){
		var newRoom = new Room(this);
		this.rooms.push(newRoom);
	}
	//add staff to the hotel
	hireStaff( name ) {

	}
	getVacantRooms(){

	}
	getKitchenService(){
		
	}

}