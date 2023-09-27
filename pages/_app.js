import { store } from "@/store/index";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Analytics />
    </Provider>
  );
}
