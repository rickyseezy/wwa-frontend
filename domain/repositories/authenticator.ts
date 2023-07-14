import {createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, Auth,getAuth} from "@firebase/auth";
import { auth } from "../../firebase/configApp";
import { IAccount} from "../models/account";





interface IAuthenticatorRepository {
    CreateUser(email: string, password: string,req:IAccount): Promise<string>
    Login(email: string, password: string): Promise<string>
}

export default class AuthenticatorRepository implements IAuthenticatorRepository {
    static currentLogged() {
      throw new Error("Method not implemented.");
    }
    async CreateUser(email: string, password: string): Promise<string> {

        try {
            const data = await createUserWithEmailAndPassword(auth, email, password)
        
            // addToAccount.Create(req)
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

    async currentLogged(){
     try{
        const auth = getAuth();
        const user = auth.currentUser;
        return user
     }catch(e){
        throw e
     }
    }

}