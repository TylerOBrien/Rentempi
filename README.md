# Rentempi

...

# Setup

### React Native Config

#### Android

In the file `android/app/build.gradle` add the following after `apply plugin: "com.android.application"`:

```
apply from: project(':react-native-config').projectDir.getPath() + '/dotenv.gradle'
```

### React Native Vector Icons

#### Android

In the file `android/app/build.gradle` add the following after `apply plugin: "com.android.application"`:

```
apply from: project(':react-native-vector-icons').projectDir.getPath() + '/../fonts.gradle'
```

#### iOS

In the file `ios/Podfile` add the following after `use_react_native!(:path => config["reactNativePath"])`:

```
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```

In the file `ios/YourProjectName/Info.plist` add the following the end of the file before `</dict>`:

```
<key>UIAppFonts</key>
<array>
	<string>AntDesign.ttf</string>
	<string>Entypo.ttf</string>
	<string>EvilIcons.ttf</string>
	<string>Feather.ttf</string>
	<string>FontAwesome.ttf</string>
	<string>FontAwesome5_Brands.ttf</string>
	<string>FontAwesome5_Regular.ttf</string>
	<string>FontAwesome5_Solid.ttf</string>
	<string>Foundation.ttf</string>
	<string>Ionicons.ttf</string>
	<string>MaterialIcons.ttf</string>
	<string>MaterialCommunityIcons.ttf</string>
	<string>SimpleLineIcons.ttf</string>
	<string>Octicons.ttf</string>
	<string>Zocial.ttf</string>
	<string>Fontisto.ttf</string>
</array>
```

Run from `ios` directory:

```
pod update
```
