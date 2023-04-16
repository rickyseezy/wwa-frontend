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
import {IComment, ICreateComment, IUpdateComment} from "../models/comment";

export interface ICommentRepository extends IBaseRepository<IComment>{
    Get: (id: string) => Promise<IComment>
    List: () => Promise<IComment[]> // might need to be paginated or filtered
    Create: (req: ICreateComment) => Promise<IComment>
    Update: (id: string, req: IUpdateComment) => Promise<Error | null>
    Delete: (id: string) => Promise<Error | null>
}

export default class CommentRepository implements ICommentRepository {

    constructor(private db: Firestore, private collectionName: string = Collections.Comments) {
    }

    async Create(req: ICreateComment): Promise<IComment> {
        try {
            const docRef = await addDoc(collection(this.db, this.collectionName), req)
            return {...req, id: docRef.id};
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async Update(id: string, req: IUpdateComment): Promise<Error | null> {
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

    async Get(id: string): Promise<IComment> {
        try {
            const doc = await getDoc(this.getObjectRef(id));
            return {
                id: id,
                ...(doc.data() as IComment),
                createdAt: doc.data()['createdAt']?.toDate(),
                updatedAt: doc.data()['updatedAt']?.toDate()
            }
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async List(): Promise<IComment[]> {
        try {
            const res: IComment[] = []

            const q = query(collection(this.db, this.collectionName), orderBy('createdAt', 'desc'))
            const data = await getDocs(q)

            data.forEach(doc => {
                res.push({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: doc.data()['createdAt']?.toDate(),
                    updatedAt: doc.data()['updatedAt']?.toDate()
                } as IComment)
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