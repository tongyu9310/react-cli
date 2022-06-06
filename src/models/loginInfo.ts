export interface LoginInfo{
  headimgurl: string;
  nickname: string;
  uuid: number,
  uid: number,
  sign?: string,
  auth?:string
}
export const initLogin = (): LoginInfo => ({
  headimgurl: '',
  nickname: 'string',
  uuid: 0,
  uid: 1,
  sign: 'string',
})