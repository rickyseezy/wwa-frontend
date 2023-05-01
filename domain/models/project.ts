import {Metadata} from "./metadata";

enum ProjectAccountType {
    Personal,
    Corporate
}

export interface IProject extends Metadata {
    id: string
    name: string
    description: string
    published: boolean
    createdBy: string // reference to account
    goal: string
    liveSupporters: number
    continent: string
    country: string
    projectAccountType: ProjectAccountType
    thematics: number[] // reference to thematics
    comments: number[] // reference to comments
    supporters: number[] // reference to accounts
    medias: string[] // reference to medias
}

export interface ICreateProject extends Omit<IProject, 'id'> {

}

export interface IUpdateProject {
    name?: string
    description?: string
    published?: boolean
    createdBy?: string // reference to account
    goal?: string
    liveSupporters?: number
    continent?: string
    country?: string
    thematics?: number[] // reference to thematics
    comments?: number[] // reference to comments
    supporters?: number[] // reference to accounts
    updatedAt?: Date
}