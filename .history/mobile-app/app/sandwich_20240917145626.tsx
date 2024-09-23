import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function sandwitch() {
    return (
    <View>
         <Text> This is my 'sandwitch' page </Text>
         <Link href="/cheese">cheese</Link>
    </View>
   
    )
}