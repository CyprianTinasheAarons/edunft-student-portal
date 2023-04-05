import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const { isConnected } = useAccount();
  const router = useRouter();
  useEffect(() => {
    if (isConnected) {
      router.push("/");
    }
  }, [isConnected]);

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-white border-2 border-indigo-500 shadow sm:rounded-lg sm:px-10">
          <div className="flex flex-col items-center align-middle sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="w-auto h-12 mx-auto"
              src="/logo.png"
              alt="Workflow"
            />
            
            <h1 className="text-xl font-bold text-center uppercase">
             Student Portal
            </h1>
          </div>
          <div className="flex justify-center py-2">
            <ConnectButton></ConnectButton>
          </div>
        </div>
      </div>
    </div>
  );
}
