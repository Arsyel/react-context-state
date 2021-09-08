import { EmailConsumer } from "./context/EmailContext";
import { UserMenu } from "./UserMenu";

export const Header = () => {
  return (
    <EmailConsumer>
      {({emails}) => (
        <header className="header">
          <div>
            <h2>NakaMail</h2>
            <div className="header__mail-count">
              {emails.length} emails
            </div>
          </div>
          <UserMenu />
        </header>
      )}
    </EmailConsumer>
  );
}