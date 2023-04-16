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
import {ICreateThematic, IThematic, IUpdateThematic} from "../models/thematic";

export interface IThematicRepository extends IBaseRepository<IThematic>{
    Get: (id: string) => Promise<IThematic>
    List: () => Promise<IThematic[]> // might need to be paginated or filtered
    Create: (req: ICreateThematic) => Promise<IThematic>
    Update: (id: string, req: IUpdateThematic) => Promise<Error | null>
    Delete: (id: string) => Promise<Error | null>
}

export default class ThematicRepository implements IThematicRepository {

    constructor(private db: Firestore, private collectionName: string = Collections.Thematics) {
    }

    async Create(req: ICreateThematic): Promise<IThematic> {
        try {
            const docRef = await addDoc(collection(this.db, this.collectionName), req)
            return {...req, id: docRef.id};
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async Update(id: string, req: IUpdateThematic): Promise<Error | null> {
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

    async Get(id: string): Promise<IThematic> {
        try {
            const doc = await getDoc(this.getObjectRef(id));
            return {
                id: id,
                ...(doc.data() as IThematic),
                createdAt: doc.data()['createdAt']?.toDate(),
                updatedAt: doc.data()['updatedAt']?.toDate()
            }
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async List(): Promise<IThematic[]> {
        try {
            const res: IThematic[] = []

            const q = query(collection(this.db, this.collectionName), orderBy('createdAt', 'desc'))
            const data = await getDocs(q)

            data.forEach(doc => {
                res.push({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: doc.data()['createdAt']?.toDate(),
                    updatedAt: doc.data()['updatedAt']?.toDate()
                } as IThematic)
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