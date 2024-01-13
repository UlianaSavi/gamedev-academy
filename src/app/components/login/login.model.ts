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
  userRole: number
}
