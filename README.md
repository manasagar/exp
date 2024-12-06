
## Setup Instructions

1. Install global dependencies:

npm install --global yarn


3. yarn install   Run only for the first time for installing the node modules  
4  If you want to start the server,    yarn run web:campus


## Project Structure
```libs/```
- **lb_utils/**: Utility functions and helpers
- **lb_data-api/**: Data management and API integration (includes Redux toolkit slices) 
- **lb_presentation/**: UI components and styling
- **lb_features/**: Feature-specific components (scoring, streak, content)
- **lb_buddy/ & *lb_ml: Buddy ,  micro learning feature specific components
- **lb_common/**: Shared components among buddy, micro learning


> Note: All route files are in `expoApp/app/` and should only import components from `libs/` folder.

## Tech Stack
- Redux Toolkit - State Management
- React Navigation/Expo Router - Navigation
- Tailwind CSS (via twrnc) - Styling

# Welcome to your Expo app 👋

In expo folder, always use npx expo install instead of yarn install

This is an [Expo](https://expo.dev) project.

## Coding standards
1. Install Expo App on your mobile device. With this app you can emulate this app on your mobile device.
   https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_IN

Changes should work for web, mobile apps- andorid, ios





## Ignore below, unless you want to know about publishing the app to playstore
# Publishing ExpoApp

Delete C:\code\dhrona_2\apps\expoApp\output_folder

1. Creating .aab file:
   Step 1: Install EAS CLI:

   ```bash
      yarn global add eas-cli
   ```

   Step 2: Configure EAS Build:

   1. Make sure you are logged in to your Expo account:
      ```bash
         eas login
      ```
   2. Initialize EAS in your project directory:
      `bash
         eas build:configure
      `
      Step 3: Build Your Android App (.aab):

   ```bash
      eas build -p android
   ```

2. Creating .apk:
   Step 1: Install Bundletool:

   ```bash
      curl -L https://github.com/google/bundletool/releases/download/1.8.2/bundletool-all-1.8.2.jar -o bundletool.jar
   ```

   Step 2: Generate the APK Set:
   [change path according to your device]

   ```bash
      java -jar bundletool.jar build-apks --bundle=C:\Users\tabas\Desktop\dhrona\expoApp\build\application-e821b01a-3a3b-4281-a324-be0f37b691e2.aab --output=C:\Users\tabas\Desktop\dhrona\expoApp\output.apks --mode=universal
   ```

   Step 3: Unzip the .apks file:
   [change path according to your device]

   ```bash
      java -jar bundletool.jar extract-apks --apks=C:\Users\tabas\Desktop\dhrona\expoApp\output.apks --output-dir=C:\Users\tabas\Desktop\dhrona\expoApp\output_folder --device-spec=device-spec.json
   ```

3. Installing to device:
   [install adb and go throught the documentation to setup using android]
   [change path according to your device]
   ```bash
      adb install C:\Users\tabas\Desktop\dhrona\expoApp\output_folder\universal.apk
   ```

# Publishing ExpoApp to playstore(Internal testing):

Step 1: Create a Expo account (if not created) and create a project in your account and follow the bellow steps

# Follow these steps below if you have created a new expo account else procede to step 2

1.  In app.json modify owner, slug and projectId according to your expo account
2.  Configure EAS Build:
    1. Make sure you are logged in to your Expo account:
       ```bash
          eas login
       ```
    2. Initialize EAS in your project directory:
       ```bash
          eas build:configure
       ```
    3. Build Your Android App (.aab):
       ```bash
          eas build -p android
       ```

Step 2: Internal testing via google play console

1.  Signin to google play console account using company authorised gmail
2.  Select 'Cyberbel' while signing in
3.  Click on 'Dhrona' under app section in main page
4.  In the side menu bar on the left side click on 'Testing'
5.  Click on 'Internal Testing'
6.  Click on 'create new releases'
7.  Configure the testing and add your gmail in the testing section

# If error related to andriod version comes after uploading .aab file, increment the 'versionCode' under android inside app.json file

8.  Drop you .aab file
9.  Preview and confirm to publish to playstore
