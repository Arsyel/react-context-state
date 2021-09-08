import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";
import { UserConsumer } from "./components/context/UserContext";

export const App = () => {
  return (
    <UserConsumer>
      {({ user }) => (user)
        ? <MainPage />
        : <LoginPage/>
      }
    </UserConsumer>
  );
}
