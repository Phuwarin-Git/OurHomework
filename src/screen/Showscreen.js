import React,{useContext} from 'react'
import {View,Text,StyleSheet,FlatList,Button} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {BlogContext}  from '../context/BlogContext'
import { Card } from 'react-native-paper'



const ShowScreen = ({route})=>{
    const {id}  =  route.params;
    const{state,dispatch} = useContext(BlogContext)
    const BlogPost  = state.find((post)=>{
        return post.id === id
    })
    return(
        <Card>
            <View>
                <Text style={styles.TextTitle}>Title : {BlogPost.title}</Text>
                <Text style={styles.TitleDetail}>Details : </Text>
                <Text style={styles.TextDetails}>{BlogPost.content}</Text>
            </View>
        </Card>
        
    )
}
const styles = StyleSheet.create({
    CardDetails:{
        marginLeft:20
    },
    TextTitle:{
        marginLeft:30,
        fontSize:30,
        

        
    },
    TitleDetail:{
        marginLeft:30,
        fontSize:20
    },
    TextDetails:{
        color: '#8c8c8c',
        marginLeft:70,
        marginTop:5,
        fontSize:30
    }

});

export default ShowScreen