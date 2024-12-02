import { Message } from "./styles";

const ErrorMessage = ({ error }: { error: string | boolean }) => {
  return <>{error && <Message>{error}</Message>}</>;
};

export default ErrorMessage;
