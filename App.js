import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Dimensions } from 'react-native';
import { Button, Checkbox, TextInput } from 'react-native-paper';

export const widthPage = Dimensions.get('screen').width
export const heightPage = Dimensions.get('screen').height

const TextInputSenha = () => {
  
  const [showPassword, setShowPassword] = useState(false)
  
  return(
    <TextInput
            mode='outlined'
            placeholder='Insira sua senha'
            underlineColor='#76ABAE'
            activeUnderlineColor='#add8e6'
            outlineColor='#76ABAE'
            activeOutlineColor='#76ABAE'
            outlineStyle={{ borderColor: '#76ABAE' }}
            underlineStyle={{ borderColor: '#76ABAE' }}
            textColor='#EEEEEE'
            placeholderTextColor='#EEEEEE'
            secureTextEntry={!showPassword}
            right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} iconColor='#76ABAE' onPress={() => setShowPassword(!showPassword)}/>}

            style={styles.textInput}
          ></TextInput>
  )
}

const CheckBoxLogin = () => {

  const [selected, setSelected] = useState(false)

  return(
    <Checkbox
      status={selected ? 'checked' : 'unchecked'}
      onPress={() => {setSelected(!selected)}}
      color='#76ABAE'
      uncheckedColor='#76ABAE'
    />
  )

}


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>Login</Text>
        <Text style={{color: '#EEEEEE', }}>Realize o login para continuar</Text>
      </View>

      <View style={styles.view}>
        <View style={{marginBottom: 20}}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            mode='outlined'
            placeholder='Insira seu Email'
            underlineColor='#76ABAE'
            activeUnderlineColor='#add8e6'
            outlineColor='#76ABAE'
            activeOutlineColor='#76ABAE'
            outlineStyle={{ borderColor: '#76ABAE' }}
            underlineStyle={{ borderColor: '#76ABAE' }}
            textColor='#EEEEEE'
            placeholderTextColor='#EEEEEE'

            style={styles.textInput}
          ></TextInput>
        </View>

        <View>
          <Text style={styles.text}>Senha</Text>
          <TextInputSenha></TextInputSenha>
        </View>

      <View style={{alignItems: 'center', flexDirection: 'row', marginTop: widthPage/250,}}>
        <CheckBoxLogin></CheckBoxLogin>
        <Text style={styles.text}>Manter-me Conectado</Text>
      </View>
      </View>
      
      <Button
        mode='contained-tonal'
        buttonColor='#76ABAE'
        textColor='#EEEEEE'
        icon='chevron-right'

        style={{width: widthPage/1.25}}

        > 
        Prosseguir </Button>

      <StatusBar style="auto" />

    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',

  },
  titleText: {
    width: widthPage/1.25,
    textAlign: 'justify',
    fontSize: 22,
    color: '#EEEEEE',
  },
  text:{
    color: '#EEEEEE',
    paddingBottom: widthPage/7000,
  },
  textInput: {
    width: widthPage/1.25,
    backgroundColor: '#222831',
    color: '#EEEEEE',
  },
  view: {
    margin: heightPage/50,
    marginVertical: heightPage/6
  },
});
