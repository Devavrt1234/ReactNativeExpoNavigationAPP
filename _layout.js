import { Stack,useRouter } from 'expo-router';



export default () => {
    
    const router=useRouter();


    return (<Stack screenOptions={{
        headerStyle: { backgroundColor: '#FFE030' },
        headerTintColor:'#1E2632',
        headerTitleStyle:{fontWeight:'bold',},
       
    }} >

       
        <Stack.Screen name="index" options={{title:'Home'}}/>
        <Stack.Screen name="modal" options={{title:'More Info',presentation:'modal',headerStyle:{backgroundColor:'crimson' }}}/>
        <Stack.Screen name="home"  options={{headerShown:false}}/>
        
        </Stack>
    );
};