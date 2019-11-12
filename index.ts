console.log("Hello student.");

enum Role{
	admin,
	subadmin,
	manager,
	user,
	hr
}

export interface User{
	firstName?: string;
	lastName?: string;
	gender?: string;
	dob?: string;
	profile?: string;
	role: Role;
	getFirstName?(): string;
	setFirstName?(firstName: string): void;
	getLastName?(): string;
	setLastName?(lastName: string): void;
	getGender?(): string;
	setGender?(gender: string): void;
	getDob?(): string;
	setDob?(dob: string): void;
	getProfile?(): string;
	setProfile?(profile: string): void;
	getRole(): Role;
	setRole(role: Role): void;
}
class Admin implements User{
	public role: Role = Role.admin;

	public salary: number;

	constructor(public firstName: string, public lastName: string){

	}
	public getFirstName(): string{
		return this.firstName;
	}
	public setFirstName(firstName: string): void{
		this.firstName = firstName;
	}
	public getRole(): Role{
		return this.role;
	}
	public setRole(role: Role): void{
		this.role = role;
	}
}

const admin1: Admin = new Admin('Abc', 'zyx');
console.log(admin1);
console.log(admin1.getRole());
console.log(admin1.getFirstName());