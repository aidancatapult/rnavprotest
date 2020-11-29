# rnavprotest
Testing AVPro using react native unity wrapper

To run on android device

Steps:
1. "npm install" inside the React Native app root.
2. Open Unity project, at the top there is a menu item called "ReactNative"->"Export Android (Unity 2019.3.*)
   The version of unity I used is 2020.1.7f1, the above calls a function inside the "Assets/Script/Editor/Build.cs" which exports android unity project as a library
   and modifies the build.gradle (can be seen in DoBuildAndroid function inside this class). It will then copy the exported library into the "android/UnityExport"
   located in project root.
3. Connect a device and run "react-native run-android" from React Native project root. (for release run "react-native run-android --variant=release")

Notes:
- Will need NDK (side by side) installed from SDK manager
