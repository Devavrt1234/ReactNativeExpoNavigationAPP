import {View,Text} from 'react-native';
import {useSearchParams} from 'expo-router';
const messageRoom=()=>{

    const {id}=useSearchParams();
    return (
        <View>
           <Text style={{fontSize:30}}>messageRoom with id:{id}</Text>
        </View>
    );
};

export default messageRoom;