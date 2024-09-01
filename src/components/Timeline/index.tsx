import { useState } from "react";
import Pooh from "../Pooh";
import { Container, HighlightedText } from "./styles";

const Timeline = () => {
  const [poohList, setPoohList] = useState<Array<any>>();
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
        poohList.map((key) => <Pooh key={key}></Pooh>)
      ) : (
        <HighlightedText>Nothing to see yet...</HighlightedText>
      )}
    </Container>
  );
};

export default Timeline;
