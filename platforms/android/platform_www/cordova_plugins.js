cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.cordova.plugins.sms.Sms",
    "file": "plugins/com.cordova.plugins.sms/www/sms.js",
    "pluginId": "com.cordova.plugins.sms",
    "clobbers": [
      "window.sms"
    ]
  },
  {
    "id": "com.dbaq.cordova.contactsPhoneNumbers.contactsPhoneNumbers",
    "file": "plugins/com.dbaq.cordova.contactsPhoneNumbers/www/contactsPhoneNumbers.js",
    "pluginId": "com.dbaq.cordova.contactsPhoneNumbers",
    "clobbers": [
      "navigator.contactsPhoneNumbers"
    ]
  },
  {
    "id": "com.synconset.imagepicker.ImagePicker",
    "file": "plugins/com.synconset.imagepicker/www/imagepicker.js",
    "pluginId": "com.synconset.imagepicker",
    "clobbers": [
      "plugins.imagePicker"
    ]
  },
  {
    "id": "cordova-fabric-plugin.FabricPlugin",
    "file": "plugins/cordova-fabric-plugin/www/FabricPlugin.js",
    "pluginId": "cordova-fabric-plugin",
    "clobbers": [
      "window.fabric.core"
    ]
  },
  {
    "id": "cordova-fabric-plugin.FabricAnswersPlugin",
    "file": "plugins/cordova-fabric-plugin/www/FabricPlugin.Answers.js",
    "pluginId": "cordova-fabric-plugin",
    "clobbers": [
      "window.fabric.Answers"
    ]
  },
  {
    "id": "cordova-fabric-plugin.FabricCrashlyticsPlugin",
    "file": "plugins/cordova-fabric-plugin/www/FabricPlugin.Crashlytics.js",
    "pluginId": "cordova-fabric-plugin",
    "clobbers": [
      "window.fabric.Crashlytics"
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryEntry",
    "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryReader",
    "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryReader"
    ]
  },
  {
    "id": "cordova-plugin-file.Entry",
    "file": "plugins/cordova-plugin-file/www/Entry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Entry"
    ]
  },
  {
    "id": "cordova-plugin-file.File",
    "file": "plugins/cordova-plugin-file/www/File.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.File"
    ]
  },
  {
    "id": "cordova-plugin-file.FileEntry",
    "file": "plugins/cordova-plugin-file/www/FileEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.FileError",
    "file": "plugins/cordova-plugin-file/www/FileError.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileError"
    ]
  },
  {
    "id": "cordova-plugin-file.FileReader",
    "file": "plugins/cordova-plugin-file/www/FileReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileReader"
    ]
  },
  {
    "id": "cordova-plugin-file.FileSystem",
    "file": "plugins/cordova-plugin-file/www/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadOptions",
    "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadOptions"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadResult",
    "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadResult"
    ]
  },
  {
    "id": "cordova-plugin-file.FileWriter",
    "file": "plugins/cordova-plugin-file/www/FileWriter.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileWriter"
    ]
  },
  {
    "id": "cordova-plugin-file.Flags",
    "file": "plugins/cordova-plugin-file/www/Flags.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Flags"
    ]
  },
  {
    "id": "cordova-plugin-file.LocalFileSystem",
    "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.LocalFileSystem"
    ],
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.Metadata",
    "file": "plugins/cordova-plugin-file/www/Metadata.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Metadata"
    ]
  },
  {
    "id": "cordova-plugin-file.ProgressEvent",
    "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.ProgressEvent"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems",
    "file": "plugins/cordova-plugin-file/www/fileSystems.js",
    "pluginId": "cordova-plugin-file"
  },
  {
    "id": "cordova-plugin-file.requestFileSystem",
    "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.requestFileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.resolveLocalFileSystemURI",
    "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.isChrome",
    "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.androidFileSystem",
    "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems-roots",
    "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.fileSystemPaths",
    "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "cordova"
    ],
    "runs": true
  },
  {
    "id": "cordova-plugin-file-transfer.FileTransferError",
    "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
    "pluginId": "cordova-plugin-file-transfer",
    "clobbers": [
      "window.FileTransferError"
    ]
  },
  {
    "id": "cordova-plugin-file-transfer.FileTransfer",
    "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
    "pluginId": "cordova-plugin-file-transfer",
    "clobbers": [
      "window.FileTransfer"
    ]
  },
  {
    "id": "cordova-open.Open",
    "file": "plugins/cordova-open/www/disusered.open.js",
    "pluginId": "cordova-open",
    "merges": [
      "cordova.plugins.disusered"
    ]
  },
  {
    "id": "cordova-plugin-appsflyer-sdk.appsflyer",
    "file": "plugins/cordova-plugin-appsflyer-sdk/www/appsflyer.js",
    "pluginId": "cordova-plugin-appsflyer-sdk",
    "clobbers": [
      "window.plugins.appsFlyer"
    ]
  },
  {
    "id": "cordova-plugin-appsflyer-sdk.AppsFlyerError",
    "file": "plugins/cordova-plugin-appsflyer-sdk/www/AppsFlyerError.js",
    "pluginId": "cordova-plugin-appsflyer-sdk",
    "clobbers": [
      "AppsFlyerError"
    ]
  },
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "id": "cordova-plugin-customurlscheme.LaunchMyApp",
    "file": "plugins/cordova-plugin-customurlscheme/www/android/LaunchMyApp.js",
    "pluginId": "cordova-plugin-customurlscheme",
    "clobbers": [
      "window.plugins.launchmyapp"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
    "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
    "pluginId": "cordova-plugin-facebook4",
    "clobbers": [
      "facebookConnectPlugin"
    ]
  },
  {
    "id": "cordova-plugin-firebase.FirebasePlugin",
    "file": "plugins/cordova-plugin-firebase/www/firebase.js",
    "pluginId": "cordova-plugin-firebase",
    "clobbers": [
      "FirebasePlugin"
    ]
  },
  {
    "id": "cordova-plugin-globalization.GlobalizationError",
    "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
    "pluginId": "cordova-plugin-globalization",
    "clobbers": [
      "window.GlobalizationError"
    ]
  },
  {
    "id": "cordova-plugin-globalization.globalization",
    "file": "plugins/cordova-plugin-globalization/www/globalization.js",
    "pluginId": "cordova-plugin-globalization",
    "clobbers": [
      "navigator.globalization"
    ]
  },
  {
    "id": "cordova-plugin-google-analytics.UniversalAnalytics",
    "file": "plugins/cordova-plugin-google-analytics/www/analytics.js",
    "pluginId": "cordova-plugin-google-analytics",
    "clobbers": [
      "analytics",
      "ga"
    ]
  },
  {
    "id": "cordova-plugin-google-app-conversion-tracker.GoogleAppTracking",
    "file": "plugins/cordova-plugin-google-app-conversion-tracker/www/gapp_track.js",
    "pluginId": "cordova-plugin-google-app-conversion-tracker",
    "clobbers": [
      "GappTrack"
    ]
  },
  {
    "id": "cordova-plugin-network-information.network",
    "file": "plugins/cordova-plugin-network-information/www/network.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "navigator.connection",
      "navigator.network.connection"
    ]
  },
  {
    "id": "cordova-plugin-network-information.Connection",
    "file": "plugins/cordova-plugin-network-information/www/Connection.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "Connection"
    ]
  },
  {
    "id": "cordova-plugin-vibration.notification",
    "file": "plugins/cordova-plugin-vibration/www/vibration.js",
    "pluginId": "cordova-plugin-vibration",
    "merges": [
      "navigator.notification",
      "navigator"
    ]
  },
  {
    "id": "cordova-plugin-whitelist.whitelist",
    "file": "plugins/cordova-plugin-whitelist/whitelist.js",
    "pluginId": "cordova-plugin-whitelist",
    "runs": true
  },
  {
    "id": "cordova-plugin-x-socialsharing.SocialSharing",
    "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
    "pluginId": "cordova-plugin-x-socialsharing",
    "clobbers": [
      "window.plugins.socialsharing"
    ]
  },
  {
    "id": "cordova-universal-clipboard.Clipboard",
    "file": "plugins/cordova-universal-clipboard/www/clipboard.js",
    "pluginId": "cordova-universal-clipboard",
    "clobbers": [
      "cordova.plugins.clipboard"
    ]
  },
  {
    "id": "de.appplant.cordova.plugin.email-composer.EmailComposer",
    "file": "plugins/de.appplant.cordova.plugin.email-composer/www/email_composer.js",
    "pluginId": "de.appplant.cordova.plugin.email-composer",
    "clobbers": [
      "cordova.plugins.email",
      "plugin.email"
    ]
  },
  {
    "id": "hu.dpal.phonegap.plugins.PinDialog.PinDialog",
    "file": "plugins/hu.dpal.phonegap.plugins.PinDialog/www/pin.js",
    "pluginId": "hu.dpal.phonegap.plugins.PinDialog",
    "merges": [
      "window.plugins.pinDialog"
    ]
  },
  {
    "id": "io.github.pwlin.cordova.plugins.fileopener2.FileOpener2",
    "file": "plugins/io.github.pwlin.cordova.plugins.fileopener2/www/plugins.FileOpener2.js",
    "pluginId": "io.github.pwlin.cordova.plugins.fileopener2",
    "clobbers": [
      "cordova.plugins.fileOpener2"
    ]
  },
  {
    "id": "io.litehelpers.cordova.sqlite.SQLitePlugin",
    "file": "plugins/io.litehelpers.cordova.sqlite/www/SQLitePlugin.js",
    "pluginId": "io.litehelpers.cordova.sqlite",
    "clobbers": [
      "SQLitePlugin"
    ]
  },
  {
    "id": "nl.x-services.plugins.toast.Toast",
    "file": "plugins/nl.x-services.plugins.toast/www/Toast.js",
    "pluginId": "nl.x-services.plugins.toast",
    "clobbers": [
      "window.plugins.toast"
    ]
  },
  {
    "id": "nl.x-services.plugins.toast.tests",
    "file": "plugins/nl.x-services.plugins.toast/test/tests.js",
    "pluginId": "nl.x-services.plugins.toast"
  },
  {
    "id": "org.apache.cordova.device.device",
    "file": "plugins/org.apache.cordova.device/www/device.js",
    "pluginId": "org.apache.cordova.device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "org.apache.cordova.inappbrowser.inappbrowser",
    "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
    "pluginId": "org.apache.cordova.inappbrowser",
    "clobbers": [
      "window.open"
    ]
  },
  {
    "id": "org.apache.cordova.splashscreen.SplashScreen",
    "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
    "pluginId": "org.apache.cordova.splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "org.apache.cordova.statusbar.statusbar",
    "file": "plugins/org.apache.cordova.statusbar/www/statusbar.js",
    "pluginId": "org.apache.cordova.statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
    "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
    "pluginId": "phonegap-plugin-barcodescanner",
    "clobbers": [
      "cordova.plugins.barcodeScanner"
    ]
  },
  {
    "id": "uk.co.whiteoctober.cordova.appversion.AppVersionPlugin",
    "file": "plugins/uk.co.whiteoctober.cordova.appversion/www/AppVersionPlugin.js",
    "pluginId": "uk.co.whiteoctober.cordova.appversion",
    "clobbers": [
      "cordova.getAppVersion"
    ]
  },
  {
    "id": "cordova-plugin-android-permissions.Permissions",
    "file": "plugins/cordova-plugin-android-permissions/www/permissions.js",
    "pluginId": "cordova-plugin-android-permissions",
    "clobbers": [
      "cordova.plugins.permissions"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com.cordova.plugins.sms": "0.1.5",
  "com.dbaq.cordova.contactsPhoneNumbers": "0.0.3",
  "com.synconset.imagepicker": "1.0.6",
  "cordova-fabric-plugin": "1.0.8",
  "cordova-plugin-file": "6.0.1",
  "cordova-plugin-file-transfer": "1.7.1",
  "cordova-open": "1.0.12",
  "cordova-plugin-appsflyer-sdk": "4.4.0",
  "cordova-plugin-camera": "1.2.0",
  "cordova-plugin-customurlscheme": "4.0.0",
  "cordova-plugin-dialogs": "1.1.2-dev",
  "cordova-plugin-facebook4": "1.7.4",
  "cordova-plugin-firebase": "0.1.24",
  "cordova-plugin-globalization": "1.0.1",
  "cordova-plugin-google-analytics": "1.5.6",
  "cordova-plugin-google-app-conversion-tracker": "0.0.2",
  "cordova-plugin-network-information": "1.0.1",
  "cordova-plugin-vibration": "1.2.0",
  "cordova-plugin-whitelist": "1.0.0",
  "cordova-plugin-x-socialsharing": "5.1.7",
  "cordova-universal-clipboard": "0.1.0",
  "de.appplant.cordova.plugin.email-composer": "0.8.3dev",
  "fr.spirotron.cordova.disabledatadetectors": "0.1.0",
  "hu.dpal.phonegap.plugins.PinDialog": "0.1.3",
  "io.github.pwlin.cordova.plugins.fileopener2": "1.0.11",
  "io.litehelpers.cordova.sqlite": "0.7.7",
  "nl.x-services.plugins.toast": "2.1.1",
  "org.apache.cordova.console": "0.2.13",
  "org.apache.cordova.device": "0.3.0",
  "org.apache.cordova.inappbrowser": "0.6.0",
  "org.apache.cordova.splashscreen": "1.0.0",
  "org.apache.cordova.statusbar": "0.1.10",
  "phonegap-plugin-barcodescanner": "4.0.2",
  "uk.co.whiteoctober.cordova.appversion": "0.1.7",
  "cordova-plugin-android-permissions": "1.0.0",
  "cordova-plugin-ionic-keyboard": "2.1.3"
};
// BOTTOM OF METADATA
});