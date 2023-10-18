export class login{
    username:any
    password:any
    constructor(username:any,password:any){
        this.username=username
        this.password=password
    }
}
export class customer{
    email:any
    password:any
    constructor(email:any,password:any){
        this.email=email
        this.password=password
    }
}
export class changepassword{
    oldpassword:any
    newpassword:any
    confirmnewpassword:any
    email:any
    constructor(oldpassword:any,newpassword:any,confirmnewpassword:any,email:any){
        this.oldpassword=oldpassword
        this.newpassword=newpassword
        this.confirmnewpassword=confirmnewpassword
        this.email=email
    }
}
export class addacustomer{
    customerName:any
    email:any
    phoneNumber:any
    gender:any
    address:any
    constructor(customerName:any,email:any,phoneNumber:any,gender:any,address:any){
        this.customerName=customerName
        this.email=email
        this.phoneNumber=phoneNumber
        this.gender=gender
        this.address=address
    }
}
 export class getacustomerbill{
    email:any
    constructor(email:any){
        this.email=email
    }
 }

 export class allcustomer{
    customerId:any
    customerName:any
    email:any
    password:any
    gender:any
    phoneNumber:any
    constructor(customerId:any,customerName:any,email:any,password:any,gender:any,phoneNumber:any){
        this.customerId=customerId
        this.customerName=customerName
        this.email=email
        this.password=password
        this.gender=gender
        this.phoneNumber=phoneNumber
    }
 }

 export class customerbill{
    email:any
    constructor(email:any){
        this.email=email
    }
 }

 export class customerbilldata{
    customerId:any
    email:any
    plan_type:any
    planAmount:any
    planName:any
    planDuration:any
    planDueDate:any
    // constructor(customerId:any,email:any,plan_type:any,planAmount:any,planName:any,planDuration:any,planDueDate:any){
    //     this.customerId=customerId
    //     this.email=email
    //     this.plan_type=plan_type
    //     this.planAmount=planAmount
    //     this.planName=planName
    //     this.planDuration=planDuration
    //     this.planDueDate=planDueDate
    // }
 }

 export class signup{
    customerName:any
    email:any
    phoneNumber:any
    gender:any
    address:any
    password:any
    cpassword:any
    constructor(customerName:any,email:any,phoneNumber:any,gender:any,address:any,password:any,cpassword:any){
        this.customerName=customerName
        this.email=email
        this.phoneNumber=phoneNumber
        this.gender=gender
        this.address=address
        this.password=password
        this.cpassword=this.cpassword
    }
 }

export class report{
    category:any
    customeremail:any
    date:any
    description:any
    // constructor(category:any,customeremail:any,date:any,description:any){
    //     this.category=category
    //     this.customeremail=customeremail
    //     this.date=date
    //     this.description=description
    // }
}

export class update{
    customerName:any
    address:any
    email:any
}

export class billmail{
    email:any
}