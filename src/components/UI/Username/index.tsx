import { Pressable } from "react-native";
import { UsernameText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { bottomTabParamList } from "../../../screens/Home";

interface IProps {
  username: string;
}

const Username = ({ username }: IProps) => {
  const navigation =
    useNavigation<BottomTabNavigationProp<bottomTabParamList>>();
  return (
    <Pressable
      onPress={() => navigation.navigate("Profile", { id: username })}
      style={{ paddingHorizontal: 4 }}
    >
      <UsernameText>{username}</UsernameText>
    </Pressable>
  );
};

export default Username;
