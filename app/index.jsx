import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { Botao } from '../Components/botao/botao';
import { Card } from '../Components/card/card';
import { Input } from '../Components/input/input';

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
      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
          {/* 2.1. Titulo */}
          <Text style={styles.titulo}>Consulte o seu CEP</Text>
          {/* 2.2. input */}

          <Input />
          {/* 2.3. botao */}
          <Botao tituloBotao={'Consultar'} />

          {/* 2.4. card de informacoes */}
          <Card />
        </View>
      </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },

  logo: {
    width: 100,
    height: 120
  },

  container: {
    gap: 40,
    width: "100%",
    minHeight: "100%",
    alignItems: "center"
  },

  containerScroll: {
    flex: 1.5,
    paddingTop: 50,
    height: "100%",
    paddingBottom: 80,
  },

  titulo: {
    fontSize: 25
  }

})