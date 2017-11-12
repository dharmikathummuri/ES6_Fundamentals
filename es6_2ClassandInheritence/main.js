"use strict"

class User{

	constructor(username,email,password){
		this.username =username;
		this.email= email;
		this.password=password;

	}

	static countUsers(){

		console.log('theres are 50 users');		
	}

	register(){

		console.log(this.username+'is now refistered');


	}
}

let bob = new User('bob','dh@gmail.com','sumukh');
bob.register();

User.countUsers();

class Member extends User{

		constructor(username,email,password,memberPackage){
			super(username,email,password);
			this.memberPackage = memberPackage;

		}
		getPackage(){

			console.log(this.username+"is subscribed to "+this.memberPackage);
		}

}

var mike = new Member("mike","ma@gmail.com","123","standard");
mike.getPackage();