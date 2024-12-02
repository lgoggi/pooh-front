import { Pressable } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Image } from "./styles";
import { bottomTabParamList } from "../../../screens/Home";

interface IProps {
  username: string;
}

const ProfilePicture = ({ username }: IProps) => {
  const navigation =
    useNavigation<BottomTabNavigationProp<bottomTabParamList>>();
  return (
    <Pressable onPress={() => navigation.navigate("Profile", { id: username })}>
      <Image source={require("../../../assets/pooh2.png")}></Image>
    </Pressable>
  );
};

export default ProfilePicture;
