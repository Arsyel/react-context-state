import { EmailConsumer } from "./context/EmailContext";

export const MessageDetail = () => {
  return (
    <EmailConsumer>
      {
        ({currentEmail, onSelectEmail}) => (
          <div className="message-detail">
            <button
              className="message-detail__button"
              onClick={() => onSelectEmail(null)}
            >
              Back
            </button>
            <h2>{currentEmail.subject}</h2>
            <div>{currentEmail.body}</div>
          </div>
        )
      }
    </EmailConsumer>
  );
}