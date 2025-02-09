# Nocfo Assignment, Created with Expo

This is an [Expo](https://expo.dev) project created with [`create-expo-app`] 
I chose Expo as it enables a fast cycle to develop React Native apps, plus Expo Go makes it quite easy to real-time develop the app.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox while developing. Works just fine to check this app. I used Expo Go and Web for this app, testing the camera in the web was a little tricky hence Expo Go.

This project uses [file-based routing](https://docs.expo.dev/router/introduction) <-- Expo documentation got everything you will need, and it was needed. 
Was going to use react-navigation with screens, but default template had something else planned for me.

## Technical decisions

I chose to implement dark and light themes as the template already included ThemedText and ThemedView. Which is also why ThemedTextInput shares a mighty resemblance as it only required minor changes.
Both Button components does use the themes even though only one is name "Themed..." (Included as a comment why there even are two seperate components).

As per standard practices, multiple uses --> component / function. For this app there weren't that many times something was used multiple times (Buttons were most used). When it grows in size, more weight is added to standard practices and everything you can fit into /components/ will be there.

file-based routing might look a little scary but it's quite nice in all honesty. The /(tabs)/ directory (parenthesis means a group) contains all screens that are accessible from the bottom nav-bar. As this app didn't require that many "screens", the rest is located in the /flowers/ directory which would contain everything related to flowers. It's easy and scalable to organize it. The [id].tsx is the Detail view screen where the specific plant ID is passed along when navigating to the screen --> item specific details.

Screenshots in "screenshots" folder, excuse my unfocused camera. EditView is the same as Details, it's done in the same place.



