import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf")
  })

  if (!fontsLoaded) {
    return (
      <View style={{ Flex: 1, justifyContent: "center", alignItens:"center"}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  //return <Stack />;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ tittle: '', headerTransparent: true, headerShown: false }} />
    </Stack>
  )
}


//segunda opcao
//return<Stack screenOptions={{headerShown: false}}/>
