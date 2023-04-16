export enum Collections {
    Accounts = 'accounts',
    Addresses = 'addresses',
    Comments = 'comments',
    Estands = 'estands',
    Medias = 'medias',
    Projects = 'projects',
    Thematics = 'thematics',
}

export interface IBaseRepository<T> {
    Get: (id: string) => Promise<T>
    List: () => Promise<T[]> // might need to be paginated or filtered
    Delete: (id: string) => Promise<Error | null>
}