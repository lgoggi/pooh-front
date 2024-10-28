import { Content, ContentWrapper, PoohWrapper } from "./styles";
import Username from "../UI/Username";
import ProfilePicture from "../UI/ProfilePicture";

export interface IPooh {
  author: string;
  id: number;
  text: string;
}

interface IProps {
  pooh: IPooh;
}

const Pooh = ({ pooh }: IProps) => {
  return (
    <PoohWrapper>
      <ProfilePicture username={pooh.author}></ProfilePicture>
      <ContentWrapper>
        <Username username={pooh.author}></Username>
        <Content>{pooh.text}</Content>
      </ContentWrapper>
    </PoohWrapper>
  );
};
export default Pooh;
