"use client";
import Image from "next/image";
import { useEffect } from "react";

const PayPalLoginButton = () => {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const scope = encodeURIComponent(process.env.NEXT_PUBLIC_PAYPAL_SCOPE ?? "");
  const baseUrl = process.env.NEXT_PUBLIC_PAYPAL_BASE_URL ?? "";
  const redirectUri = encodeURIComponent(
    process.env.NEXT_PUBLIC_PAYPAL_REDIRECT_URI ?? ""
  );
  const url = `${baseUrl}authorize?flowEntry=static&client_id=${clientId}&response_type=code&scope=${encodeURIComponent(
    scope
  )}&redirect_uri=${redirectUri}`;

  const redirectToPayPal = () => {
    // Redirect to the palpay website
    window.location.href = url;
  };
  useEffect(() => {
    // Capture url after the redirect
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const error = params.get("error"); // Capture an error

    if (code) {
      console.log("Login made with success! Code:", code);
      alert("Login made with success! Code: " + code);
    } else if (error) {
      console.error("Error on the paypal login:", error);
      alert("Error in the login paypal.");
    }
  }, []);

  return (
    <button
      onClick={redirectToPayPal}
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    >
      <Image
        className="dark:invert"
        src="/vercel.svg"
        alt="PayPal logo"
        width={20}
        height={20}
      />
      Login com PayPal
    </button>
  );
};

export { PayPalLoginButton };
