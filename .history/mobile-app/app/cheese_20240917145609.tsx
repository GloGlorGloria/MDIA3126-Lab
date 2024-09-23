import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function cheese() {
    return (
    <View>
         <Text> This is my 'cheese' page </Text>
         <Link href="/sandwitch">Sandwitch</Link>
    </View>
   
    )
}