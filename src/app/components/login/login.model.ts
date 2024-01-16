export interface IUserData {
  userInfo: IUserInfo,
  tokens: {
    token: string,
    refreshToken: string
  }
}
export interface IUserInfo {
  userId: number,
  userName: string,
  userAvatar: string,
  userRole: number,
  rememberPassword: boolean,
  password: string | null
}

export interface ILoginInfo {
  login: string,
  password: string,
  rememberPassword: boolean,
}
