import React, { useContext } from "react";
import { FlatList, Text, View, Alert } from "react-native";
import { Avatar, Button, ListItem } from "@rneui/base";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import { ListItemTitle } from "@rneui/base/dist/ListItem/ListItem.Title";
import { ListItemSubtitle } from "@rneui/base/dist/ListItem/ListItem.Subtitle";
import UsersContext from "../context/UsersContext";

export default props => {

    const {state, dispatch} = useContext(UsersContext)

    function confirmUserDeletion(user){
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim', onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },

            {
                text: 'Não'
            }
        ])
    }

    function rightActions(user) {
        return (
            <Button
                title="Deletar"
                onPress={() => confirmUserDeletion(user)}
                icon={{ name: 'delete', color: 'white' }}
                buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
            />
        )
    }

    function leftActions(user){
        return (
            <Button
            title="Editar"
            onPress={() => props.navigation.navigate('UserForm', user)}
            icon={{ name: 'edit', color: 'white' }}
            buttonStyle={{ minHeight: '100%', backgroundColor: 'orange' }}
            
          />
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem.Swipeable
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}
                rightContent={rightActions(user)}
                leftContent={leftActions(user)}
            >
                <Avatar size={50}
                    rounded title={user.name} source={{ uri: user.avatarUrl }} />

                <ListItemContent>
                    <ListItemTitle>{user.name}</ListItemTitle>
                    <ListItemSubtitle>{user.email}</ListItemSubtitle>
                </ListItemContent>

            </ListItem.Swipeable>
        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}