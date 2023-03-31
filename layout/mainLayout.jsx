import Navbar from "../components/navigation/navbar";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-black">
              &copy; 2023 EDUNFT, Inc. All rights reserved.d
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
