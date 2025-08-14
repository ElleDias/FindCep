import axios from 'axios';
import { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { Botao } from '../Components/botao/botao';
import { Card } from "../Components/card/card";
import { Input } from '../Components/input/input';

export default function Index() {
  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});
  const [aparecidinho, setAparecidinho] = useState(false);

  async function consultarCep(e) {
    e.preventDefault();
    try {

      if (cep !== "" && cep.length === 8) {

        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        setJsonCep(resposta.data);
        setAparecidinho(true);

      } else {
        alert("O cep está incorreto. Escreva corretamente.")
      }

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {/* index é a página principal */}
      {/* 1. Logo + imagem de fundo */}

      <ImageBackground source={require('../assets/images/imgFundo.png')}
        style={styles.imgFundo}>
        <Image source={require('../assets/images/Logo.png')} style={styles.logo}></Image>

      </ImageBackground>

      {/* 2. Campo de consulta */}
      <ScrollView style={styles.containerScroll}>

        <View style={styles.container}>
          {/* 2.1 Titulo */}
          <Text style={styles.titulo}>Consulte seu CEP</Text>

          {/* 2.2. Input */}
          {/* Input. */}
          <Input
            valorCep={cep}
            onChangeValorCep={e => setCep(e)}></Input>

          {/* Botão. */}

          <Botao tituloBotao='Consultar' onPress={consultarCep} />

          {/* Card de Informações. */}
           {aparecidinho && 
          <Card
            cep={jsonCep.cep}
            logradouro={jsonCep.logradouro}
            bairro={jsonCep.bairro}
            estado={jsonCep.estado}
            uf={jsonCep.uf}
            regiao={jsonCep.regiao}
          />
          }
        </View>
      </ScrollView>
    </>

  );
}

//Estilos dos meus componentes:
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
    alignItems: 'center'
  },
  containerScroll: {
    flex: 1.5,
    paddingTop: 50,
    paddingBottom: 50,
    height: '100%',
    paddingBottom: 200

  },
  titulo: {
    fontSize: 25,
    fontFamily: "Poppins-Bold",
    color: '#000000'
  }

})