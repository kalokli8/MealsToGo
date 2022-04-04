import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import firebase from "firebase/app";
import "firebase/functions";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context.js";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyDv4dtEauo76NKIMr8fPYdwJI0oNWB3lZM",
  authDomain: "mealstogo-d9dcc.firebaseapp.com",
  projectId: "mealstogo-d9dcc",
  storageBucket: "mealstogo-d9dcc.appspot.com",
  messagingSenderId: "913608440019",
  appId: "1:913608440019:web:4e3549ccd06ba36f8fbc26",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword("Peter@gmail.com", "test123")
  //     .then((user) => {
  //       console.log(user);
  //       setIsAuthenticated(true);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  // if (!isAuthenticated) {
  //   return null;
  // }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar />
    </>
  );
}
