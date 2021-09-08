import { EmailConsumer } from "../components/context/EmailContext";
import { MessageDetail } from "../components/MessageDetail";
import { Header } from "../components/Header";
import { MessageList } from "../components/MessageList";

export const MainPage = () => {
  return (
    <EmailConsumer>
      {
        ({currentEmail}) => (
          <main>
            <Header />
            { currentEmail ? <MessageDetail /> : <MessageList /> }
          </main>
        )
      }
    </EmailConsumer>
  );
}