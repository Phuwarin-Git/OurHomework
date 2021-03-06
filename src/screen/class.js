import React,{useContext} from 'react'
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {BlogContext}  from '../context/BlogContext'

const Class = ({navigation})=>{
    const {state,dispatch} = useContext(BlogContext)
    
return (
    <View style={{flex:1}}>
        
        <Button 
        color="black"
        title="create" 
        onPress={()=>navigation.navigate("create")} 
        />
        
        <FlatList 
         data={state}
         keyExtractor={post=>post.title}
         renderItem={({item})=>{
               return (
                   <TouchableOpacity
                   onPress={()=>navigation.navigate("show",{id:item.id})}
                   >
                        <View style={{
                        flexDirection:"row",
                        justifyContent:"space-between",
                        marginHorizontal:10,
                        marginBottom:5,
                        backgroundColor:"white",
                        padding:10,
                        elevation:4
                        }}>
                        <Text style={{fontSize:22}}>Name Note : {item.title}</Text>   
                        <Feather name="trash" size={24} 
                        onPress={()=>dispatch({type:"REMOVE",payload:item.id})}
                        />
                        </View>    
                   </TouchableOpacity>
                
               
               )
         }}
        />
    </View>
)
}

export default Class