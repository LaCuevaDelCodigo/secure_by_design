import { FC } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MantineProvider } from '@mantine/core';

export const App: FC<{}> = () => {

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
        primaryColor: 'teal',
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}
