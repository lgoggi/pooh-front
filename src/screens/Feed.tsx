import { View } from "react-native";
import PoohInput from "../components/PoohInput";
import Timeline from "../components/Timeline";
import { useState } from "react";
import PoohModal from "../components/PoohModal";

const Feed = () => {
  const [showPoohModal, setShowPoohModal] = useState(false);

  return (
    <View style={{ flex: 1 }}>
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
