import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Input } from '../Components/input/input';
import {Botao} from '../Components/botao/botao';
export default function Index() {
  return (
    <>
    {/* 1. Logo + imagem de fundo */}
    {/* imagem de fundo */}
    <ImageBackground source={require('../assets/images/imgFundo.png')}
    style={styles.imgFundo}>
      <Image source={require('../assets/images/Logo.png')}
    style={styles.logo}></Image>
    

    </ImageBackground>
    {/* 2. Campo de consulta */}
    <View style={styles.container}>
    {/* 2.1. Titulo */}
    <Text>Consulte o seu CEP</Text>
    {/* 2.2. input */}
   <Input/>

    {/* 2.3. botao */}

    <Botao tituloBotao={'Consultar'}/>

    {/* 2.4. card de informacoes */}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
imgFundo:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%'
},

logo:{
  width: 100,
  height:120
},

container:{
  flex:1.5,
  alignItems: "center",
  paddingTop: 50,
  paddingBottom: 50,
  gap: 40
},

titulo: {
  fontSize: 25
}

})