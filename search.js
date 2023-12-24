
import { StyleSheet, Text, View } from "react-native";
import {Link,Stack} from 'expo-router';
//expo router uses React Navigation behind the scene
export default function Page() {

  const users=[
    {
      username:'Devavrat Singh',
      name:'Devavrat profile',
    },
    {
      username:'Aradhya Singh',
      name:'Aradhya profile',
    },
   
    {
      username:'Deep Singh',
      name:'Deep profile',
    },
    {
      username:'Ammritanjal Singh',
      name:'Ammritanjal profile',
    },
    {
      username:'Shagun Singh',
      name:'Shagun profile',
    },
    {
      username:'Anya Singh',
      name:'Anya profile',
    },
    {
      username:'Vaishnavi Singh',
      name:'Vaishnavi profile',
    },
    {
      username:'Manisha Singh',
      name:'Manisha profile',
    },
    {
      username:'Anamika Singh',
      name:'Anamika profile',
    },
    {
      username:'Arushi Singh',
      name:'Arushi profile',
    },
    {
      username:'Himanshi Singh',
      name:'Himanshi profile',
    },
  ];

  return (
    <View style={styles.container}>
      
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        {/* <Link href="/Deep singh?name=Deep Singh" style={styles.link}>Open Deep's profile
        </Link> */}

        {users.map((user)=>(
           <Link  key={user.username} href={`/${user.username}`} style={styles.link}>Open {user.name}
           </Link>
        ))

        }
        
        {/* <Link href={{pathname:'/Deep',params:{name:'Dev',surname:'Singh'}}} style={styles.link}>Open Dev's profile
        </Link> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  link:{
    fontSize:20,
    marginVertical:10,
    fontWeight:'bold',
    
  },
});
