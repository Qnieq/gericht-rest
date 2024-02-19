import { IBlogs } from "./components.interface"

export interface ITeamState {
    data: object
    isLoading: boolean
    fulfilled: boolean
    error: string
}

export interface ITeamById extends Omit<ITeamState, 'data'> {
    chef: object
}

export interface INews extends Omit<ITeamState, 'data'> {
    news: IBlogs[] 
}

export interface ITags extends Omit<ITeamState, 'data'> {
    tags: object
}

export interface ILastNews extends Omit<ITeamState, 'data'> {
    lastNews: object
}
