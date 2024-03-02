export namespace backend {
	
	export class SignUpPayload {
	    name: string;
	    lastName: string;
	    password: string;
	    email: string;
	    phoneNumber: string;
	    isDoctor: boolean;
	    isActive: boolean;
	    sex: boolean;
	
	    static createFrom(source: any = {}) {
	        return new SignUpPayload(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.lastName = source["lastName"];
	        this.password = source["password"];
	        this.email = source["email"];
	        this.phoneNumber = source["phoneNumber"];
	        this.isDoctor = source["isDoctor"];
	        this.isActive = source["isActive"];
	        this.sex = source["sex"];
	    }
	}

}

