import { Injectable } from "@nestjs/common";


@Injectable({})

export class AuthService{

    signup () {
        return {
            msg: 'Ihave signed up'
        }
    }
    signin() {

        return {
            msg:'I have signed in'
        }
    }
}