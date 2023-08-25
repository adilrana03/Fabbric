import React, { useEffect } from "react";
// import { useRouter } from "next/router";

const getTokenFromLocalStorage = () => {
  const authToken = localStorage.getItem("AUTH_TOKEN");
  return authToken;
};

const VerifySession = () => {
  const authToken = getTokenFromLocalStorage();

  if (!authToken) {
    console.error("Authorization token not found in localStorage.");
    // setTimeout(() => {
    //   router.push("/onboarding");
    // }, 2000);
    return null;
  }

  return authToken;
};

export default VerifySession;
