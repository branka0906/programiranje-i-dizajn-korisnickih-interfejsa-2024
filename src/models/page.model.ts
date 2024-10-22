import { SortModel } from "./sort.model"

export interface Pagemodel<T> {
    content: T[]
    pageable: {
        sort: SortModel
        pageNumber: number
        pagesize: number
        offset: number
        paged: boolean
        unpaged: boolean
    }
    last: boolean
    totalPages: number
    totalelements: number
    size: number
    number: number

    sort: SortModel

    first: boolean
    numberOfElements: number
    empty: boolean

}