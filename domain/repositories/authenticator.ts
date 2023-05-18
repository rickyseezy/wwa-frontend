import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "@firebase/auth";


interface IAuthenticatorRepository {
    CreateUser(email: string, password: string): Promise<string>
    Login(email: string, password: string): Promise<string>
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

    async Login(email, password): Promise<string> {
        const auth = getAuth();
       try {
           const data = await signInWithEmailAndPassword(auth, email, password)
           return data?.user?.uid
       }catch (e) {
           throw e
       }
    }
}