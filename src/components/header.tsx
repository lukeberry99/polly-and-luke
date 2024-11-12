import { navLinks } from "@/lib/consts";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [location] = useLocation();

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex space-x-8 font-header my-4">
            {navLinks.map((link) => {
              const href =
                link.name === "Home"
                  ? "/"
                  : `/${link.name.toLowerCase().replace(/\s+/g, "-")}`;
              const isActive = location === href;

              return (
                <Link
                  key={link.name}
                  href={href}
                  className={`inline-flex items-center px-4 pt-1 text-2xl font-medium rounded-full
                    ${isActive ? link.bgColor : link.defaultBgColor || "bg-none"}
                    ${link.textColor || "text-gray-900"} hover:${link.bgColor}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
