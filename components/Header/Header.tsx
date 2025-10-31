import ThemeToggle from '../ToggleSwitch/ToggleSwitch';

export default function Header() {
  return (
    <>
      <header className="h-16 w-full sticky top-0 shadow-md flex flex-col justify-center items-center px-4 bg-background/80 border-b border-border backdrop-blur-sm backdrop-saturate-200 z-1000 dark:bg-background/50">
        <nav className="relative max-w-[1400px] w-full flex flex-1 items-center">
          <div className="text-xl font-bold">My Header</div>
          <ThemeToggle />
        </nav>
      </header>
      <div className="sticky top-[64px] z-30 border-b border-border bg-background/80 px-4 py-3 backdrop-blur-sm backdrop-saturate-200 dark:bg-background/50 md:hidden">
        for Mobile
      </div>
    </>
  );
}
