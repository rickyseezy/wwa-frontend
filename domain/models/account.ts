import {Metadata} from "./metadata";

export interface IAccount extends Metadata {
    id: string
    firstName: string
    lastName: string
    certified: boolean
    activated: boolean
    birthdate: Date
    email: string
    password: string
    phoneNumber: string
    roles: string[]
    addressID: string // reference to address model
}

export interface ICreateAccount extends Omit<IAccount, 'id' | 'lastName' | 'birthdate' | 'phoneNumber' | 'addressID'> {
}

export interface IUpdateAccount {
    firstName?: string
    lastName?: string
    certified?: boolean
    activated?: boolean
    birthdate?: string
    email?: string
    password?: string
    phoneNumber?: string
    roles?: string[]
    addressID?: string // reference to address model
    updatedAt?: Date
}