import React, { useState, useEffect, useRef, useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { Camera } from "expo-camera";
import { Text } from "../../../components/typography/text.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <>
      <TouchableOpacity style={{ flex: 0.9 }} onPress={snap}>
        <ProfileCamera
          ref={(camera) => (cameraRef.current = camera)}
          type={type}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center", flex: 0.1 }}
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
      >
        <Button icon="camera" mode="contained" color="lightgrey">
          <Text> Flip </Text>
        </Button>
      </TouchableOpacity>
    </>
  );
};
