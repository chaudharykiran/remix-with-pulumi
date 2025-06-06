import { Link } from "@remix-run/react";
import { Button } from "@/components/ui/button";

export function TopNavigation() {
  return (
    <header className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-serif">
            <Link to="/">
              TechBlog
            </Link>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contact">
            <Button className="text-sm rounded-full">
              Contact
            </Button>
          </Link>
          <Button className="text-sm rounded-full">
            <Link to="https://github.com/chaudharykiran/devlog/blob/master/docs/WRITING.md" target="_blank" rel="noopener noreferrer">
              Write
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}