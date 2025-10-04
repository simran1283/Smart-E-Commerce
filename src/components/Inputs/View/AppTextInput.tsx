import { StyleSheet, TextInput } from "react-native"
import { AppColors } from "../../../styles/colors"
import { vs, s } from "react-native-size-matters"
import { FC } from "react"
import { AppTextInputProps } from "../Model/TextInputModel"

// Text Input Component that helps in taking input from the user and is also used in app text input controller

const AppTextInput:FC<AppTextInputProps> = ({value,onChangeText,placeholder,keyboardType,secureTextEntry,style}) =>{
    return(
        <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[styles.input,style]}>

        </TextInput>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    input : {
        height : vs(40),
        borderRadius : s(25),
        borderWidth : 1,
        borderColor  :AppColors.borderColor,
        paddingHorizontal : s(15),
        fontSize : s(16),
        backgroundColor : AppColors.white,
        width : "100%",
        marginBottom : vs(10)
    }
})