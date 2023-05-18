import {createUserWithEmailAndPassword, getAuth} from "@firebase/auth";
import firebase from "firebase/compat";
import auth = firebase.auth;

interface IAuthenticatorRepository {
    CreateUser(email: string, password: string): Promise<string>
}

export default class AuthenticatorRepository implements IAuthenticatorRepository {
    async CreateUser(email: string, password: string): Promise<string> {
        const auth = getAuth();
        try {
            const data = await createUserWithEmailAndPassword(auth, email, password)
            return data?.user?.uid
        } catch (e) {
            throw e
        }

    }
}