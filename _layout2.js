
import {Stack} from 'expo-router';

export default ()=>{

    return <Stack>
        <Stack.Screen name="index" options={{title:'Messages',  headerStyle: { backgroundColor: '#FFE030' },
        headerTintColor:'blue',
        headerTitleStyle:{fontWeight:'bold',},
    }}/>
        <Stack.Screen name="[id]" options={{title:'Message Room ',  headerStyle: { backgroundColor: '#FFE030' },
        headerTintColor:'indigo',
        headerTitleStyle:{fontWeight:'bold',},
    }}/>
    </Stack>;
};