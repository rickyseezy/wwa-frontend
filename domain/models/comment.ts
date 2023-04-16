import {Metadata} from "./metadata";

export interface IComment extends Metadata {
    id: string
    content: string
    authorID: string // reference to account
}

export interface ICreateComment extends Omit<IComment, 'id'> {
}

export interface IUpdateComment {
    content?: string
    authorID?: string // reference to account
    updatedAt?: Date
}