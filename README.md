# Notes on Development. 

This App is completely untested on apple devices. I don't own any (it's a choice. They resist progressive web apps, so I refuse to give them any money), and this was developed locally so no emulators were available. 

This should run fine locally with the following configurations:

* node: v18.14.2
* npm: v9.5.0

1. Run npx expo install
2. npm start
3. Scan the QR code (preferably on an android device). 

I have *tried*, and I mean *really tried* to export this as a snack. I will include the link, and on the iPhone emulator it appears to work, but with the android version as soon as you open a recipe, or try to save anything on a new recipe, the whole app crashes (and closes) with no logs indicating as to why. It is currently 1am on the Friday before this is due so time is really not on my side right now. My best guess is the module versions used locally being incompatiable with the current SDK in the Snack environment. This environment is not really up to standard in my opinion for an app that is meant to be ready to deploy to an app store, proven by the limitations it places on versions of npm modules allowed. 

I have also included an eas build (as an apk file for android). Apple build required an apple account. I had one years ago (iPhone 3G era), but forgotten the credentials. This apk file is another option as it should be directly installable on a device. The links to download this can be found here. I have tweaked the code so the build includes a couple of example recipes:

* Expo Project: https://expo.dev/accounts/richardsefton/projects/recipe-book
* Expo Build: https://expo.dev/accounts/richardsefton/projects/recipe-book/builds/6ceffccc-7526-481a-b72c-25b8e8df5b5e
* Github repository (master/main branch): https://github.com/RichardSefton/recipe-book

I have set both to public so access should not be an issue. Installing the app may throw some security messages because I'm not a trusted source, but I promise there is nothing nefarious in the code. Everything is local (chose local SQLite over firebase, and no network requests are made). 

