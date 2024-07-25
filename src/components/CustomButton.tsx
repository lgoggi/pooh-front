import { Pressable, StyleSheet, Text } from "react-native"

interface IProps {
  text: string;
  action: () => void;
}

const CustomButton = ({text, action}: IProps) => {
  return(
    <Pressable onPress={action} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#12CDD9',
    padding: 16,
    paddingHorizontal: 24,
    borderRadius: 9999,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20
  }
});

export default CustomButton;