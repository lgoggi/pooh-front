import { useEffect, useState } from "react";
import Pooh, { IPooh } from "../Pooh";
import { Container, HighlightedText } from "./styles";
import { API_URL } from "@env";
import { FlatList } from "react-native";

const Timeline = () => {
  const [poohList, setPoohList] = useState<Array<IPooh>>();
  const getTimeline = async () => {
    const response = await fetch(`${API_URL}/pooh/see`);
    setPoohList(await response.json());
  };

  useEffect(() => {
    getTimeline();
  }, []);

  return (
    <Container>
      {poohList ? (
        <FlatList
          data={poohList}
          renderItem={(pooh) => <Pooh pooh={pooh.item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <HighlightedText>Nothing to see yet...</HighlightedText>
      )}
    </Container>
  );
};

export default Timeline;
