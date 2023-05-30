import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@firebase/auth";
import { auth } from "../../firebase/configApp";
import { IAccount} from "../models/account";
import AccountRepository from '../../domain/repositories/account'
import { DB } from "../../firebase/configApp";

let addToAccount = new AccountRepository(DB)


interface IAuthenticatorRepository {
    CreateUser(email: string, password: string,req:IAccount): Promise<string>
    Login(email: string, password: string): Promise<string>
}

export default class AuthenticatorRepository implements IAuthenticatorRepository {
    async CreateUser(email: string, password: string,req :IAccount): Promise<string> {

        try {
            const data = await createUserWithEmailAndPassword(auth, email, password)
            req.id = data?.user?.uid
            addToAccount.Create(req)
            return data?.user?.uid
        } catch (e) {
            throw e
        }
    }

    async Login(email : string, password :string): Promise<string> {

       try {
           const data = await signInWithEmailAndPassword(auth, email, password)
           return data?.user?.uid
       }catch (e) {
           throw e
       }
    }
}