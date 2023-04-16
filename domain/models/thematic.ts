import {Metadata} from "./metadata";

export interface IThematic extends Metadata {
    id: string
    name: string
    mediaID: string // reference to media model
}

export interface ICreateThematic extends Omit<IThematic, 'id'> {

}

export interface IUpdateThematic {
    name?: string
    mediaID?: string // reference to media model
    updatedAt?: Date
}