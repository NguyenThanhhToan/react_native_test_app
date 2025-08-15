export enum ScreenName {
    Home = 'HomeScreen',
    User = 'UserScreen',
    Login = 'LoginScreen',
    Setting = 'SettingScreen',
    ListProvince = 'ListProvinceScreen',
    District = 'DistrictScreen',
}
export enum TabName {
    HomeTab = 'HomeTab',
    SettingTab = 'SettingTab',
}

export type RootTabParamList = {
    [TabName.HomeTab]: undefined;
    [TabName.SettingTab]: undefined;
};

export type HomeStackParamList = {
    [ScreenName.Home]: undefined;
    [ScreenName.User]: undefined;
    [ScreenName.ListProvince]: undefined;
    [ScreenName.District]: { provinceId: number; provinceName: string };
};

export type AuthStackParamList = {
    [ScreenName.Login]: undefined;
};