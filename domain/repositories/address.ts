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
import {IAddress, ICreateAddress, IUpdateAddress} from "../models/address";

export interface IAddressRepository extends IBaseRepository<IAddress>{
    Get: (id: string) => Promise<IAddress>
    List: () => Promise<IAddress[]> // might need to be paginated or filtered
    Create: (req: ICreateAddress) => Promise<IAddress>
    Update: (id: string, req: IUpdateAddress) => Promise<Error | null>
    Delete: (id: string) => Promise<Error | null>
}

export default class AddressRepository implements IAddressRepository {

    constructor(private db: Firestore, private collectionName: string = Collections.Addresses) {
    }

    async Create(req: ICreateAddress): Promise<IAddress> {
        try {
            const docRef = await addDoc(collection(this.db, this.collectionName), req)
            return {...req, id: docRef.id};
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async Update(id: string, req: IUpdateAddress): Promise<Error | null> {
        try {
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

    async Get(id: string): Promise<IAddress> {
        try {
            const doc = await getDoc(this.getObjectRef(id));
            return {
                id: id,
                ...(doc.data() as IAddress),
                createdAt: doc.data()['createdAt']?.toDate(),
                updatedAt: doc.data()['updatedAt']?.toDate()
            }
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async List(): Promise<IAddress[]> {
        try {
            const res: IAddress[] = []

            const q = query(collection(this.db, this.collectionName), orderBy('createdAt', 'desc'))
            const data = await getDocs(q)

            data.forEach(doc => {
                res.push({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: doc.data()['createdAt']?.toDate(),
                    updatedAt: doc.data()['updatedAt']?.toDate()
                } as IAddress)
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