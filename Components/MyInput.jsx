import { FontAwesome } from "@expo/vector-icons"
import { TextInput, View } from "react-native"

export function MyInput({placeholder,iconName,onchange,value}){
    return (
    <View style={{flexDirection:"row",borderRadius:20,borderWidth:1,borderColor:"black",backgroundColor:"white",height:50,padding:10,alignItems:"center",justifyContent:"flex-start",marginHorizontal:10}}>
    <FontAwesome name={iconName}size={15} style={{marginRight:10}}/>
    <TextInput placeholder={placeholder} onChangeText={onchange} value={value}/>

    </View>
    )
}