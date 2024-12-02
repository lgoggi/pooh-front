import { View } from "react-native";
import { useState } from "react";
import PoohModal from "../components/Feed/PoohModal";
import PoohInput from "../components/Feed/PoohInput";
import Timeline from "../components/Feed/Timeline";

const Feed = () => {
  const [showPoohModal, setShowPoohModal] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "#1c1c1c" }}>
      <PoohInput onClick={() => setShowPoohModal((state) => !state)} />
      <Timeline />
      <PoohModal
        showModal={showPoohModal}
        setShowPoohModal={setShowPoohModal}
      ></PoohModal>
    </View>
  );
};

export default Feed;
