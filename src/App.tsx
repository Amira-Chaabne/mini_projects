import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import Layout from "./Layout/Layout";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{colorScheme}}>
        <Layout />
      </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}