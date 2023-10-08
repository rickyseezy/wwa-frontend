import {Metadata} from "./metadata";

export interface IAccount extends Metadata {
    id: string
    firstName: string
    lastName?: string
    gender?:string
    pseudo? : string
    ville?:string
    certified: boolean
    activated: boolean
    birthdate: Date
    email: string
    password: string
    phoneNumber?: string
    roles: string[]
    addressID?: string // reference to address model
}

export interface ICreateAccount extends IAccount {
}

export interface IUpdateAccount {

    firstName?: string
    lastName?: string
    certified?: boolean
    activated?: boolean
    birthdate?: string
    pseudo?:string
    ville?: string,
    gender?: string,
    email?: string
    password?: string
    phoneNumber?: string
    roles?: string[]
    addressID?: string // reference to address model
    updatedAt?: Date
}