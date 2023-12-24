//dynamic routing in react native

import {Link,Stack,Redirect} from 'expo-router';
//e+title:'Homexpo router uses React Navigation behind the scene
export default function Page() {

  
  return (<Redirect href={'/home'}/>);
  // npx uri-scheme open exp://192.168.1.16:8082/--/home/messages --android
  // deep link for opening messages file page on emulator directly
  //copy it and paste into terminal and press enter key and see on emulator screen

 
}


