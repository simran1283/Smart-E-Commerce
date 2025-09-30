import { Control, Controller, FieldValues, Path } from "react-hook-form"
import AppTextInput from "./AppTextInput"
import { StyleSheet } from "react-native"
import { AppColors } from "../../../styles/colors"
import AppText from "../../texts/View/AppText"
import { vs } from "react-native-size-matters"

interface AppTextInputControllerProps<T extends FieldValues> {
    control: Control<T>,
    name: Path<T>,
    placeholder: string,
    secureTextEntry?: boolean,
    keyboardType?: "default" | "numeric" | "email-address",
    rules?: object
}

const AppTextInputController = <T extends FieldValues>({
    control,
    rules,
    name,
    placeholder,
    secureTextEntry,
    keyboardType }
    : AppTextInputControllerProps<T>
) => {
    return (
        <Controller
            control={control}
            // rules={rules}
            name={name}
            render={({
                field: { onChange, value },
                fieldState: { error }
            }) => (
                <>
                    <AppTextInput
                        value={value}
                        onChangeText={onChange}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        keyboardType={keyboardType}
                        style={error && styles.errorInput}
                    />
                    {error && <AppText style={styles.textError}>{error.message}</AppText>}
                </>
            )}
        />
    )
}

export default AppTextInputController

const styles = StyleSheet.create({
    errorInput: {
        borderColor: AppColors.red
    },
    textError: {
        textAlign: "center",
        color: AppColors.red,
        marginBottom: vs(10),
        marginTop: -vs(5)
    }
})