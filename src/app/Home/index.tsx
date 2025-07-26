import { View, Image } from 'react-native';
import { Button } from '@/components/Button/';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />

      <Button title="Entrar" onPress={() => alert('oi')} activeOpacity={0.7} />
      <Button title="Criar Conta" onPress={() => console.log('Criar Conta')} activeOpacity={0.9} />
      <Button title="Salvar" activeOpacity={0.1} />
      <Button title="Voltar" activeOpacity={0.5} />
    </View>
  )
}
