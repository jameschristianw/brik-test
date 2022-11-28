# Brik.id Mobile Developer Test

A project to create app according to requirement from [here](https://github.com/brik-id/test-m). This app is created using React Native CLI.

## How to run

1. Run `npm i` or `npm i --save` in the terminal at project folder
2. When npm has finished installing all dependecies, run `npx react-native run-android` in the same folder. Metro server and android emulator should open immediately. If for some reason, server and emulator not opening, follow next step
3. run `npx react-native start`. This command should open Metro server in the current teriminal
4. Manually open emulator via Android Studio or using terminal (provided emulator command has been added to environment `PATH`) using this [tutorial](https://developer.android.com/studio/run/emulator-commandline) from Android Studio

## Limitation

1. Some values are hardcoded, such as

- `categoryId`
- `categoryName`
- `sku`
- `id`

2. `id` is hardcoded because `id` in the API (Mock API) isn't an int and can't be changed. To show the difference, I use `objectId` to differentiate each item.
3. User types the imageUrl rather than choosing from gallery or camera (API Limitation), if API can accomodate that, the body in `POST` when creating new product will use form data instead of JSON
