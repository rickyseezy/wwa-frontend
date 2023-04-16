import {Metadata} from "./metadata";

export interface IAddress extends Metadata {
    id: string
    address: string
    zipCode: string
    country: string
    region: string
}

export interface ICreateAddress extends Omit<IAddress, 'id'> {

}

export interface IUpdateAddress {
    id?: string
    address?: string
    zipCode?: string
    country?: string
    region?: string
    updatedAt?: Date
}