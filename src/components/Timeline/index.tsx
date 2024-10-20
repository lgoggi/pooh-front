import { useEffect, useState } from "react";
import Pooh, { IPooh } from "../Pooh";
import { Container, HighlightedText } from "./styles";
import { API_URL } from "@env";

const Timeline = () => {
  const [poohList, setPoohList] = useState<Array<IPooh>>();
  const getTimeline = async () => {
    const response = await fetch(`${API_URL}/pooh/see`);
    setPoohList(await response.json());
    console.log("response: ", poohList);
  };

  useEffect(() => {
    getTimeline();
  }, []);
  return (
    <Container
      bounces={false}
      contentInsetAdjustmentBehavior="always"
      overScrollMode="auto"
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        gap: 72,
        padding: 72,
        paddingHorizontal: 36,
      }}
    >
      {poohList ? (
        poohList.map((pooh) => <Pooh key={pooh.id} pooh={pooh}></Pooh>)
      ) : (
        <HighlightedText>Nothing to see yet...</HighlightedText>
      )}
    </Container>
  );
};

export default Timeline;
