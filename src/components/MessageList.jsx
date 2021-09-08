import { EmailConsumer } from "./context/EmailContext";
import { UserConsumer } from "./context/UserContext";
import { Email } from "./Email";

export const MessageList = () => {
  return (
    <UserConsumer>
      {
        ({user}) =>
        <EmailConsumer>
          {
            ({loading, emails, onSelectEmail}) =>
            <div className="message-list">
              {
                loading
                ? <div className="message-list__no-message">Loading...</div>
                : (emails?.length === 0)
                ? <div className="message-list__no-message">Your mailbox is empty, {user.firstname}!</div>
                : <ul className="message-list__message">
                  {
                    emails?.map((email) => (
                      <Email
                        key={email.id}
                        data={email}
                        onClick={onSelectEmail}
                      />
                    ))
                  }
                </ul>
              }
            </div>
          }
        </EmailConsumer>
      }
    </UserConsumer>
  );
}