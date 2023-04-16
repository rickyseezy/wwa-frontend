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
import {ICreateEstand, IEstand, IUpdateEstand} from "../models/estand";

export interface IEstandRepository extends IBaseRepository<IEstand>{
    Get: (id: string) => Promise<IEstand>
    List: () => Promise<IEstand[]> // might need to be paginated or filtered
    Create: (req: ICreateEstand) => Promise<IEstand>
    Update: (id: string, req: IUpdateEstand) => Promise<Error | null>
    Delete: (id: string) => Promise<Error | null>
}

export default class EstandRepository implements IEstandRepository {

    constructor(private db: Firestore, private collectionName: string = Collections.Estands) {
    }

    async Create(req: ICreateEstand): Promise<IEstand> {
        try {
            const docRef = await addDoc(collection(this.db, this.collectionName), req)
            return {...req, id: docRef.id};
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async Update(id: string, req: IUpdateEstand): Promise<Error | null> {
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

    async Get(id: string): Promise<IEstand> {
        try {
            const doc = await getDoc(this.getObjectRef(id));
            return {
                id: id,
                ...(doc.data() as IEstand),
                createdAt: doc.data()['createdAt']?.toDate(),
                updatedAt: doc.data()['updatedAt']?.toDate()
            }
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async List(): Promise<IEstand[]> {
        try {
            const res: IEstand[] = []

            const q = query(collection(this.db, this.collectionName), orderBy('createdAt', 'desc'))
            const data = await getDocs(q)

            data.forEach(doc => {
                res.push({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: doc.data()['createdAt']?.toDate(),
                    updatedAt: doc.data()['updatedAt']?.toDate()
                } as IEstand)
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