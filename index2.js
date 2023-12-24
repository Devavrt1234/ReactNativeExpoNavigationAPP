import {View,Text} from 'react-native';
import {Link} from 'expo-router';
const messages=()=>{

    return (
        <View>
            <Link href="home/messages/1" style={{margin:10,fontSize:24}}>
            Go to Messages with Devavrat
            </Link>
            <Link href="home/messages/2"style={{margin:10,fontSize:24}}>
            Go to Messages with Satyam
            </Link>
            <Link href="home/messages/3"style={{margin:10,fontSize:24}}>
            Go to Messages with Shivam Bhiya
            </Link>
            <Link href="home/messages/4" style={{margin:10,fontSize:24}}>
            Go to Messages with Ammritanjal
            </Link>
            
        </View>
    );
};

export default messages;