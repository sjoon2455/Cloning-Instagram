import React from "react";
import { ExpoConfigView } from "@expo/samples";
import { RNCamera, FaceDetector } from "react-native-camera";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "app.json"
  };
  <uses-permission android:name="android.permission.CAMERA" />

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
