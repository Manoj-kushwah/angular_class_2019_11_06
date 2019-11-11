console.log("Hello student.");

enum RoleEnum{
	admin,
	subadmin,
	manager,
	user,
	hr
}

class Role{
	roleName: string;
	roleCode: number;
	constructor(roleEnum: RoleEnum){
		this.roleCode = roleEnum;
		this.roleName = RoleEnum[roleEnum];
	}
}

export class CommonUser{
	private firstName: string;
	private lastName: string;
	private gender: string;
	private dob: string;
	constructor(private role: Role){
	}

	public getFirstName(): string{
		return this.firstName;
	}
	public setFirstName(firstName: string): void{
		this.firstName = firstName;
	}
	public getLastName(): string{
		return this.lastName;
	}
	public setLastName(lastName: string): void{
		this.lastName = lastName;
	}
	public getGender(): string{
		return this.gender;
	}
	public setGender(gender: string): void{
		this.gender = gender;
	}
}
const role: Role = new Role(RoleEnum.admin);
console.log(new CommonUser(role));


export class User extends CommonUser{
	constructor() {
		super(new Role(RoleEnum.user));
	}
}
const user: User = new User();
console.log(user);

export class AdminUser extends CommonUser{
	constructor() {
		super(new Role(RoleEnum.admin));
	}
}
const adminUser: AdminUser = new AdminUser();
console.log(adminUser);
console.log(adminUser.getFirstName());