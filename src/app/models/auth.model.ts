export interface JwtToken {
    token:string,
    message:string,
    token_type?:string,
    expires_at?:string,
    id?:number
}