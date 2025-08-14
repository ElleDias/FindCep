import { Stack } from "expo-router";

export default function RootLayout() {
  //return <Stack />;
return(
  <Stack>
    <Stack.Screen name="index" options={{tittle: '', headerTransparent: true, headerShown: false}}/>
  </Stack>
)
}


//segunda opcao
//return<Stack screenOptions={{headerShown: false}}/>
