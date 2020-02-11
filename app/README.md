# auto-service

Automobile service appoitment booking app using react native

## Run on virtual device

Install dependencies,

    yarn

or

    npm install

Then run android or ios simulator on your machine and run,

    npx react-native run-android

or

    npx react-native run-ios

## Generate APK for release

For creating a signing key, we can use keytool.
Hope you have `keytool` available in your system/path.

Execute the below command to generate key.

    keytool -genkey -v -keystore autoservice-key.keystore -alias autoservice -keyalg RSA -keysize 2048 -validity 10000

Here `autoservice-key.keystore` is the keystore file name and `autoservice` is the alias. The above command will ask for a store password and a key password which need to be added in `android/gradle.properties`.

Change the `MYAPP_RELEASE_STORE_FILE` and `MYAPP_RELEASE_KEY_ALIAS` in `android/gradle.properties` if you are using your own values in the above command.

Then to generate release apk,

    cd android
    ./gradlew assembleRelease

This will generate release APK as `android/app/build/outputs/apk/app-release.apk`