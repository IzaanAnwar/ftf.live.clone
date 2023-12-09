import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-screen items-center justify-between bg-transparent px-4 py-6">
      <div className="flex items-center justify-between ">
        <span className="mr-2 cursor-pointer rounded-md bg-zinc-900 p-3">
          <HamburgerMenuIcon />
        </span>
        <span className="mx-2 cursor-pointer">
          <FTF_LOGO />
        </span>
        <span className="flex cursor-pointer">
          <h1 className="font-bold">FTF</h1>
          <h2>.LIVE</h2>
        </span>
      </div>
      <div className="flex items-center justify-center">
        <Button
          variant="ghost"
          size="sm"
          className="mx-2 rounded-full px-6 hover:bg-secondary"
        >
          Login
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="border border-accent bg-gradient-to-b from-[#4286f443] px-8 text-accent hover:to-[#4286f443]"
        >
          Signup
        </Button>
      </div>
    </nav>
  );
}

export const FTF_LOGO = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2000"
      height="2000"
      viewBox="-153.85 0 2000 2000"
      className="h-6 w-6 text-blue-600"
    >
      <path
        fill="currentColor"
        d="M153.85 380.09l669.68 316.74V2000l-669.68-316.74V380.09zM1167.42 0L186 348.94l663.68 318.74 978.38-350.94zm-18.1 596.29v797.38l696.83 271.49V345.89z"
        transform="translate(-153.85)"
      ></path>
    </svg>
  );
};
