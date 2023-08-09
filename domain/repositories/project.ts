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
import {ICreateProject, IProject, IUpdateProject} from "../models/project";

export interface IProjectRepository extends IBaseRepository<IProject>{
    Get: (id: string) => Promise<IProject>
    List: () => Promise<IProject[]> // might need to be paginated or filtered
    Create: (req: ICreateProject) => Promise<IProject>
    Update: (id: string, req: IUpdateProject) => Promise<Error | null>
    Delete: (id: string) => Promise<Error | null>
}

export default class ProjectRepository implements IProjectRepository {

    constructor(private db: Firestore, private collectionName: string = Collections.Projects) {
    }

    async Create(req: ICreateProject): Promise<IProject> {
        try {
            const docRef = await addDoc(collection(this.db, this.collectionName), req)
            return {...req, id: docRef.id};
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async Update(id: string, req: IUpdateProject): Promise<Error | null> {
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

    async Get(id: string): Promise<IProject> {
        try {
            const doc = await getDoc(this.getObjectRef(id));
            return {
                id: id,
                ...(doc.data() as IProject),
                createdAt: doc.data()['createdAt']?.toDate(),
                updatedAt: doc.data()['updatedAt']?.toDate()
            }
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    async List(): Promise<IProject[]> {
        try {
            const res: IProject[] = []

            const q = query(collection(this.db, this.collectionName), orderBy('createdAt', 'desc'))
            const data = await getDocs(q)

            data.forEach(doc => {
                res.push({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: doc.data()['createdAt']?.toDate(),
                    updatedAt: doc.data()['updatedAt']?.toDate()
                } as IProject)
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