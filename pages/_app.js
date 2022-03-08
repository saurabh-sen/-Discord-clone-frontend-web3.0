import "../styles/globals.css";
import { DiscordProvider } from "../Context/Context";
// import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  return (
    <DiscordProvider>
      <Component {...pageProps} />
    </DiscordProvider>
  )
}

export default MyApp;
