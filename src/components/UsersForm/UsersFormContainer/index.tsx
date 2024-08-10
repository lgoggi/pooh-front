import { KeyboardAvoidingView, Pressable, Keyboard } from "react-native";
import { Logo } from "../Logo";
import { Container, Link, LinkWrapper, SecondaryText, Section } from "./styles";
import { useEffect } from "react";
import { useKeyboardVisible } from "../../../hooks/useIsKeyboardVisible";

interface IProps {
  children: React.ReactNode;
  redirectLink: string;
  navigation: any;
}

export const UsersFormContainer = ({
  children,
  redirectLink,
  navigation,
}: IProps) => {
  const keyboardIsVisible = useKeyboardVisible();

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
      {!keyboardIsVisible && <Logo />}
      <Section>
        {children}

        <LinkWrapper>
          <SecondaryText>or</SecondaryText>
          <Pressable
            onPress={() => navigation.navigate(redirectLink.toLowerCase())}
          >
            <Link>{redirectLink}</Link>
          </Pressable>
        </LinkWrapper>
      </Section>
    </Container>
  );
};
