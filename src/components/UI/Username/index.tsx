import { Pressable } from "react-native";
import { UsernameText } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../App";

interface IProps {
  username: string;
}

const Username = ({ username }: IProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Pressable
      onPress={() => navigation.navigate("profile", { id: username })}
      style={{ paddingHorizontal: 4 }}
    >
      <UsernameText>{username}</UsernameText>
    </Pressable>
  );
};

export default Username;
