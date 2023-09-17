import { useState } from "react";
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserButton } from "../components/UserButton/UserButton";
import { LinksGroup } from "./NavbarLinkGroup";
import { IconBrandRedux } from "@tabler/icons-react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import TodoApp from "../section/TodoApp";

function Layout() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <Router>
      <AppShell
        navbarOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300 }}>
            <Navbar.Section grow>
              <LinksGroup label="React-redux todo app" icon={IconBrandRedux} />
            </Navbar.Section>
            <Navbar.Section>
              <UserButton
                email="chaabaneamira.nan@gmail.com"
                name="Amira Chaabane"
                image=""
              />
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={40}>
            <div className="flex justify-between h-full items-center px-4">
              <Text color="dimmed">React projects</Text>
              {/* <DarkLight /> */}
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
            </div>
          </Header>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              // Using redux just for this mini project
              <Provider store={store}>
                <TodoApp />
              </Provider>
            }
          />
        </Routes>
      </AppShell>
    </Router>
  );
}

export default Layout;
