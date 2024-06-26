export interface ISlice {
    isLoading: boolean
    fulfilled: boolean
    error: string
}

export interface IChefs {
    color: string;
    image: string;
    name: string;
    role: string;
    points: string[];
    sign: string;
    description: string;
}

export interface ITeamState {
    data: IChefs[] | object
    isLoading: boolean
    fulfilled: boolean
    error: string
}

export interface IBlogData {
    Image: string
    id: number
    description: string
    Title: string
    Instructions: string
    Ingredients: string[]
    tags: string[]
    author?: string
    date?: string
    comments: {
        username: {
            user: string
            comment: string
        }
    }
    likes: {
        likes_who: string[]
        count: number
    }
}

export interface IUserDataReg {
    login: string
    name: string
    email: string
    password: string
}

export interface IUserDataLogin {
    login: string
    password: string
}

export interface ITeamById extends Omit<ITeamState, 'data'> {
    chef: IChefs[]
}


export interface IBlog extends Omit<ITeamState, 'data'>{
    data: IBlogData[]
}

export interface INewsState extends Omit<ITeamState, 'data'> {
    news: IBlogData[],
    count: number
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
    lastNews: object
}

export interface INewsById extends Omit<IBlog, 'data'> {
    newsById: IBlogData[]
}

export interface ISearchBlogs extends Omit<IBlog, 'data'> {
    search: IBlogData[]
}

export interface IUserRegSlice extends Omit<ITeamState, 'data'> {
    userReg: IUserDataReg[]
    auth: boolean
}

export interface IUserLoginSlice extends Omit<ITeamState, 'data'> {
    userLogin: IUserDataReg[]
    userData: IUserDataReg[]
    auth: boolean
}

// export interface IBlogActivity extends Omit<ITeamState, 'data'> {
//     activityInfo: IBlogData[]
// }