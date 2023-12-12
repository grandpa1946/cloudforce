module.exports = {
  packagerConfig: {
    icon: "./assets/icons/cloudforce.ico",
    setupIcon: "./assets/icons/cloudforce.ico",
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        iconUrl: "https://cdn.discordapp.com/attachments/1102746676462104716/1143278436148842496/cloudforce.ico", 
        setupIcon: "./assets/icons/cloudforce.ico",
      },
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
