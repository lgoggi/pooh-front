import { Pressable } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../App";
import { Image } from "./styles";

interface IProps {
  username: string;
}

const ProfilePicture = ({ username }: IProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Pressable onPress={() => navigation.navigate("profile", { id: username })}>
      <Image source={require("../../../assets/pooh2.png")}></Image>
    </Pressable>
  );
};

export default ProfilePicture;
