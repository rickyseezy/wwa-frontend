import {Metadata} from "./metadata";

export interface IMedia extends Metadata {
    id: string
    url: string
    type: string
    name: string
    extension: string
}

export interface ICreateMedia extends Omit<IMedia, 'id'> {

}

export interface IUpdateMedia {
    url?: string
    type?: string
    name?: string
    extension?: string
    updatedAt?: Date
}