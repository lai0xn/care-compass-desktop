export namespace backend {
	
	export class LoginPayload {
	    email: string;
	    password: string;
	
	    static createFrom(source: any = {}) {
	        return new LoginPayload(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.email = source["email"];
	        this.password = source["password"];
	    }
	}
	export class LoginResponse {
	    token: string;
	    status: number;
	
	    static createFrom(source: any = {}) {
	        return new LoginResponse(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.token = source["token"];
	        this.status = source["status"];
	    }
	}
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
	export class UserResponse {
	    ID: number;
	    // Go type: time
	    CreatedAt: any;
	    // Go type: time
	    UpdatedAt: any;
	    DeletedAt: any;
	    // Go type: struct { CreatedAt time
	    Patient: any;
	    PatientID: string;
	    NatID: string;
	    BloodGroup: string;
	    ChronicDisease: string;
	    ActiveMedication: string;
	    status: number;
	
	    static createFrom(source: any = {}) {
	        return new UserResponse(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ID = source["ID"];
	        this.CreatedAt = this.convertValues(source["CreatedAt"], null);
	        this.UpdatedAt = this.convertValues(source["UpdatedAt"], null);
	        this.DeletedAt = source["DeletedAt"];
	        this.Patient = this.convertValues(source["Patient"], Object);
	        this.PatientID = source["PatientID"];
	        this.NatID = source["NatID"];
	        this.BloodGroup = source["BloodGroup"];
	        this.ChronicDisease = source["ChronicDisease"];
	        this.ActiveMedication = source["ActiveMedication"];
	        this.status = source["status"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace struct { CreatedAt time {
	
	export class  {
	    // Go type: time
	    CreatedAt: any;
	    // Go type: time
	    UpdatedAt: any;
	    DeletedAt: any;
	    ID: string;
	    Email: string;
	    ProfilePic: string;
	    Name: string;
	    LastName: string;
	    PhoneNumber: string;
	    Sex: boolean;
	    IsActive: boolean;
	    IsDoctor: boolean;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.CreatedAt = this.convertValues(source["CreatedAt"], null);
	        this.UpdatedAt = this.convertValues(source["UpdatedAt"], null);
	        this.DeletedAt = source["DeletedAt"];
	        this.ID = source["ID"];
	        this.Email = source["Email"];
	        this.ProfilePic = source["ProfilePic"];
	        this.Name = source["Name"];
	        this.LastName = source["LastName"];
	        this.PhoneNumber = source["PhoneNumber"];
	        this.Sex = source["Sex"];
	        this.IsActive = source["IsActive"];
	        this.IsDoctor = source["IsDoctor"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

