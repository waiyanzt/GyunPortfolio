export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 mt-auto bg-white">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Honey. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
