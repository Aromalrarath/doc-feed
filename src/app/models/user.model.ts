export interface User {
    id: number
    firstName: string
    middleName: string
    lastName: string
    username: string
    mobile: number
    email: string
    passwordHash: string
    registeredAt: string
    lastLogin: string
    intro: string
    profile: string
    token: string
}

export interface UserList {
    data:User[]
}

export interface Request {
    id: number,
    sourceId: number,
    targetId: number,
    type: string,
    status: number,
    createdAt: string,
    updatedAt: string,
    notes: string,
    firstname:string
    lastname:string
    username:string
}

export interface RequestList {
    data:Request[]
}