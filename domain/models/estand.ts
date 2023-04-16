import {Metadata} from "./metadata";

export interface IEstand extends Metadata {
    id: string
    link: string
    description: string
    projectID: string // reference project
}

export interface ICreateEstand extends Omit<IEstand, 'id'> {

}

export interface IUpdateEstand {
    id: string
    link: string
    description: string
    projectID: string // reference project
    updatedAt?: Date
}