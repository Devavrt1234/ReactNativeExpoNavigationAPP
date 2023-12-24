import {Tabs} from 'expo-router/tabs';
import { FontAwesome,AntDesign} from '@expo/vector-icons';

import { useRouter } from 'expo-router';

export default ()=>{

    const router=useRouter();
    return (<Tabs screenOptions={{tabBarShowLabel:false,tabBarActiveTintColor:'indigo'}}>

        <Tabs.Screen name="feed" options={{tabBarIcon:({color})=>(
        
        <FontAwesome name="home" size={24} color={color} />
        ),
        title:'Feed',
        headerRight:()=>(
            <AntDesign onPress={()=> router.push('/modal')} name="infocirlceo" size={25} color="black" />
            ),
        headerStyle: { backgroundColor: '#FFE030' },
        headerTintColor:'#1E2632',
        headerTitleStyle:{fontWeight:'bold',},
        }}/>

<Tabs.Screen name="search" options={{tabBarIcon:({color})=>(
        
        <FontAwesome name="search" size={24} color={color} />
),
title:'Search',
headerRight:()=>(
    <AntDesign onPress={()=> router.push('/modal')} name="infocirlceo" size={25} color="black" />
    ),
    headerStyle: { backgroundColor: '#FFE030' },
        headerTintColor:'#1E2632',
        headerTitleStyle:{fontWeight:'bold',},
    
    }}/>

<Tabs.Screen name="messages" options={{tabBarIcon:({color})=>(
        
        <FontAwesome name="envelope" size={24} color={color} />
),
title:'Messages',
headerShown:false,
    
    }}/>

    </Tabs>
    );
};