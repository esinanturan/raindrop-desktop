exports.default = ()=>({
    appId: 'io.raindrop.macapp',

    beforePack: 'build/webapp.js',
    afterSign: 'build/mac/notarize.js',

    //Include
    files: [
        'src/**/*',
        'webapp/dist/electron/prod/**/*'
    ],

    //Deep-links
    protocols: [
        {
            'name': 'Raindrop-io-deeplink',
            'schemes': ['rnio']
        }
    ],

    //macOS
    mac: {
        category: 'public.app-category.productivity',
        entitlements: 'build/mac/entitlements.mac.plist',
        entitlementsInherit: 'build/mac/entitlements.mac.plist',
        icon: 'build/mac/icon.icns',
        darkModeSupport: true,
        forceCodeSigning: true,
        artifactName: 'Raindrop.io-darwin-${arch}-${version}.${ext}',
        target: [{
            target: 'default',
            arch: ['x64', 'arm64']
        }]
    },
    dmg: {
        artifactName: 'Raindrop-${arch}.${ext}',
        background: 'build/mac/dmg@2x.png',
        iconSize: 128,
        format: 'UDBZ',
        contents: [
            {
                x: 530,
                y: 245,
                type: 'link',
                path: '/Applications'
            },
            {
                x: 259,
                y: 245,
                type: 'file'
            }
        ],
        window: {
            width: 780,
            height: 435
        }
    },
    
    //Windows
    win: {
        icon: 'build/win/icon.ico',
        target: [{
            target: 'squirrel',
            arch: ['x64']
        }]
    },
    squirrelWindows: {
        iconUrl: 'https://raindrop.io/favicon.ico',
        loadingGif: 'build/win/loadingGif.gif',
        artifactName: 'RaindropInstaller.exe'
    }
})