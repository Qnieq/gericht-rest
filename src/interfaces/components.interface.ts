import { Dispatch, SetStateAction } from "react";
import { IUserDataReg } from "./store.interface";

export interface IStat {
    num: string
    stat: string
}

export interface IAchiev {
    place: string;
    title: string;
    description: string;
}

export interface IBlogs {
    id: number
    image: string
    date: string
    author?: string
    title: string
    description: string
}

export interface IImg {
    id: number,
    url: string
}

export interface IData {
    current: number,
    img: IImg[],
}

export interface IAward {
    id: number
    place: string
    name: string
    description: string
}
export interface IChef {
    name: string;
    role: string;
    image: string;
    color: string;
    description?: string;
    points?: string[]
    sign?: string
}

export interface ICustomers {
    id: number
    image: string
    comment: string
    name: string
    role: string
}

export interface IDrinks {
    id: number
    name: string
    size: string
    price: number
}

export interface ITitle {
    id: number
    title: string
}

export interface ICategory {
    category: string
    amount: number
}

export interface ICount {
    start: number
    end: number
}

export interface IAuthContext {
    auth: boolean
    setAuth: Dispatch<SetStateAction<boolean>>
    userInfo: IUserDataReg
}

export interface IBlogComment {
    id: number
    user: string
    username: {
        user: string
        comment: string
    }
}

export interface IComment {
    user: string
    comment: string
}

export interface IBlogLikes {
    id: number
    likes_who: string[]
    count: number
}