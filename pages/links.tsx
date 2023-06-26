import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Links() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hostname.startsWith("links.")) {
      router.replace("/links");
    } else {
      window.location.replace("https://canguden.com");
    }
  }, []);

  return null;
}
