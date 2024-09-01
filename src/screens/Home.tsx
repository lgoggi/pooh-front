import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { RootStackParamList } from "../../App";
import PoohInput from "../components/PoohInput";
import Timeline from "../components/Timeline";
import { useEffect, useState } from "react";
import PoohModal from "../components/PoohModal";

const Home = ({ navigation }: NativeStackScreenProps<RootStackParamList>) => {
  const [showPoohModal, setShowPoohModal] = useState(true);

  useEffect(() => {
    console.log("show: ", showPoohModal);
  });

  return (
    <View style={{ flex: 1 }}>
      <PoohInput onClick={() => setShowPoohModal((state) => !state)} />
      <Timeline />
      <PoohModal showModal={showPoohModal}></PoohModal>
    </View>
  );
};

export default Home;
