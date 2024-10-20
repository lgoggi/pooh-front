import { Text, View } from "react-native";

export interface IPooh {
  author: string;
  id: number;
  text: string;
}

interface IProps {
  pooh: IPooh;
}

const Pooh = ({ pooh }: IProps) => {
  return (
    <View>
      <Text>{pooh.text}</Text>
    </View>
  );
};
export default Pooh;
