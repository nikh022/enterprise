export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 text-white">
      <img className="h-auto max-w-full " height={100} width={100} src="src/assets/logo.jpg" alt="image description"/>
      {/* <div className="text-lg px-10 font-semibold">VARSHA ENTERPRISES</div> */}
      <div className="flex justify-between space-x-10">
        <div className="hover:text-gray-300 cursor-pointer">Home</div>
        <div className="hover:text-gray-300 px-10 cursor-pointer">About</div>
      </div>
    </div>
  );
}
 