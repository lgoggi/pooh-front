import { StyleSheet, Text, TextInput, View } from "react-native";

interface IProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  placeholder?: string;
  isPassword?: boolean;
}

export const Input = ({label, setValue, placeholder, isPassword=false}: IProps) => {

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput onChangeText={text => setValue(text)} secureTextEntry={isPassword} cursorColor={'#EBEBEF'} style={styles.input} placeholder={placeholder} placeholderTextColor={'#92929D'} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    alignSelf: "flex-start",
    backgroundColor: '#1F1D2B',
    color: '#EBEBEF',
    fontSize: 16,
    marginHorizontal: 16,
    paddingHorizontal: 8,
    marginBottom: -8,
    zIndex: 1,
  },
  input: {
    backgroundColor: '#1F1D2B',
    borderColor: '#92929D',
    borderRadius: 9999,
    borderWidth: 1,
    color: '#92929D',
    fontSize: 16,
    fontWeight: "500",
    padding: 12,
    paddingHorizontal: 20,
  },
});
