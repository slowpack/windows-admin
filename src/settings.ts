const globalSettings: Settings.all = {
  app: {
    colorScheme: 'light',
    elementSize: 'default',
    enablePermission: false,
    iconifyOfflineUse: true,
    enableAppSetting: false,
  },
  menu: {
    baseOn: 'backend',
    menuMode: 'side',
    switchMainMenuAndOpenWindow: false,
    subMenuUniqueOpened: true,
    subMenuCollapse: false,
    enableSubMenuCollapseButton: true,
    enableHotkeys: false,
  },
  toolbar: {
    enableFullscreen: false,
    enableColorScheme: false,
  },
  navSearch: {
    enable: true,
    enableHotkeys: true,
  },
  window: {
    enableHotkeys: true,
  },
  copyright: {
    enable: false,
    dates: '',
    company: '',
    website: '',
    beian: '',
  },
}

export default globalSettings
