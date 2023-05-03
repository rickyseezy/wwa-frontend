import {ICreateAccount, IAccount, IUpdateAccount} from "../models/account";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    query,
    Firestore,
    updateDoc,
    getDoc,
    orderBy,
    getDocs
} from "@firebase/firestore";
import {Collections, IBaseRepository} from "./index";

export interface IAccountRepository extends IBaseRepository<IAccount>{
    Get: (id: string) => Promise<IAccount>
    List: () => Promise<IAccount[]> // might need to be paginated or filtered
    Create: (req: ICreateAccount) => Promise<IAccount>
    Update: (id: string, req: IUpdateAccount) => Promise<Error | null>
    Delete: (id: string) => Promise<Error | null>
}

export default class AccountRepository implements IAccountRepository {
    static create() {
      throw new Error("Method not implemented.");
    }

    constructor(private db: Firestore, private collectionName: string = Collections.Accounts) {
    }

    async Create(req: ICreateAccount): Promise<IAccount> {
        try {
            const docRef = await addDoc(collection(this.db, this.collectionName), req)
            let data: IAccount
            let res: IAccount
            res = {
                ...data, // Remove typescript error
                ...req
            }
            return {...res, id: docRef.id};
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async Update(id: string, req: IUpdateAccount): Promise<Error | null> {
        try {
            if(!req?.updatedAt) {
                req.updatedAt = new Date()
            }

            await updateDoc(this.getObjectRef(id), req as any)

            return null
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async Delete(id: string): Promise<Error | null> {
        try {
            await deleteDoc(this.getObjectRef(id))

            return null
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async Get(id: string): Promise<IAccount> {
        try {
            const doc = await getDoc(this.getObjectRef(id));
            return {
                id: id,
                ...(doc.data() as IAccount),
                birthdate: doc.data()['birthdate']?.toDate(),
                createdAt: doc.data()['createdAt']?.toDate(),
                updatedAt: doc.data()['updatedAt']?.toDate()
            }
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async List(): Promise<IAccount[]> {
        try {
            const res: IAccount[] = []

            const q = query(collection(this.db, this.collectionName), orderBy('createdAt', 'desc'))
            const data = await getDocs(q)

            data.forEach(doc => {
                res.push({
                    id: doc.id,
                    ...doc.data(),
                    birthdate: doc.data()['birthdate']?.toDate(),
                    createdAt: doc.data()['createdAt']?.toDate(),
                    updatedAt: doc.data()['updatedAt']?.toDate()
                } as IAccount)
            })

            return res;
        }catch (e) {
            throw e
        }
    }

    private getObjectRef(id: string) {
       return doc(this.db, this.collectionName, id)
    }
}