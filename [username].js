
import {View,Text,Button} from 'react-native';
import  {Stack,useRouter,useSearchParams} from 'expo-router';

import React from 'react';

const profile=()=>{

    const router=useRouter();
    
    const {name,surname,username}=useSearchParams();

    // console.warn(params);
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Stack.Screen
        options={{headerStyle:{backgroundColor:'#1E2632'},
        headerTintColor:'#FFE030',
      }}
      
        />
        <Text style={{fontSize:30}}>Hello {name} {surname} (@{username})</Text>
        <Button onPress={()=>router.back()} title='Go Back'/>
      </View>
    );
};

export default profile;
