export interface ITeamState {
    data: object
    isLoading: boolean
    fulfilled: boolean
    error: string
}

export interface ITeamById extends Omit<ITeamState, 'data'> {
    chef: object
}

export interface IBlogData {
    Image: string
    id: number
    description: string
    Title: string
    Instructions: string
    Ingredients: string[]
    tags: string
}

export interface IBlog extends Omit<ITeamState, 'data'>{
    data: IBlogData[]
}

export interface INews extends Omit<IBlog, 'data'> {
    news: IBlogData[],
    count: number
}

export interface ITags extends Omit<IBlog, 'data'> {
    tags: string[]
    activeTags: string[]
}

export interface ILastNews extends Omit<IBlog, 'data'> {
    lastNews: IBlogData
}

export interface ISearchBlogs extends Omit<IBlog, 'data'> {
    search: IBlogData[]
}
