export interface UserData {
  hasError: boolean,
  errors: [
    string
  ],
  total: number,
  data: {
    userInfo: {
      userId: number,
      userName: string,
      userAvatar: string,
      userRole: number
    },
    tokens: {
      token: string,
      refreshToken: string
    }
  }
}
