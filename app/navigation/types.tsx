export enum ScreenName {
    Home = 'Home',
    User = 'User',
    Login = 'Login',
    Setting = 'Setting',
    ListProvince = 'ListProvince',
}

export type RootTabParamList = {
    [ScreenName.Home]: undefined;
    [ScreenName.User]: undefined;
    [ScreenName.Login]: undefined;
    [ScreenName.Setting]: undefined;
    [ScreenName.ListProvince]: undefined;
};
