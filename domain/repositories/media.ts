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
import {ICreateMedia, IMedia, IUpdateMedia} from "../models/media";

export interface IMediaRepository extends IBaseRepository<IMedia>{
    Get: (id: string) => Promise<IMedia>
    List: () => Promise<IMedia[]> // might need to be paginated or filtered
    Create: (req: ICreateMedia) => Promise<IMedia>
    Update: (id: string, req: IUpdateMedia) => Promise<Error | null>
    Delete: (id: string) => Promise<Error | null>
}

export default class MediaRepository implements IMediaRepository {

    constructor(private db: Firestore, private collectionName: string = Collections.Medias) {
    }

    async Create(req: ICreateMedia): Promise<IMedia> {
        try {
            const docRef = await addDoc(collection(this.db, this.collectionName), req)
            return {...req, id: docRef.id};
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async Update(id: string, req: IUpdateMedia): Promise<Error | null> {
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

    async Get(id: string): Promise<IMedia> {
        try {
            const doc = await getDoc(this.getObjectRef(id));
            return {
                id: id,
                ...(doc.data() as IMedia),
                createdAt: doc.data()['createdAt']?.toDate(),
                updatedAt: doc.data()['updatedAt']?.toDate()
            }
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async List(): Promise<IMedia[]> {
        try {
            const res: IMedia[] = []

            const q = query(collection(this.db, this.collectionName), orderBy('createdAt', 'desc'))
            const data = await getDocs(q)

            data.forEach(doc => {
                res.push({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: doc.data()['createdAt']?.toDate(),
                    updatedAt: doc.data()['updatedAt']?.toDate()
                } as IMedia)
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