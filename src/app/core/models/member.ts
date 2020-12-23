export class Member{
    constructor(obj = {}){
        Object.assign(this, obj)
    }
    name: string
    lastName: string
    about: string
    photo: string
}