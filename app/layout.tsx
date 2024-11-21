"use client";

import {
  PropsWithChildren,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
} from "react";

import "./globals.css";
import { Card } from "@/components/ui/card";
import ThemeProvider from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";
import Script from "next/script";
import { GigyaProvider, useGigya } from "@/lib/cdp-context";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { RotateCcw } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import CXFlow from "@/components/cx-flow";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className="m-4">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <GigyaProvider>
            <main className="flex min-h-screen justify-center w-full">
              <div className="max-w-6xl w-full">
                <HeaderNavBar />
                {children}
              </div>
            </main>
          </GigyaProvider>
          <Toaster />
        </ThemeProvider>
      </body>
      <Script src="https://cdns.cdp.gigya.com/websdk.js" />
    </html>
  );
};

const HeaderNavBar = () => {
  const { setCurrentUID, currentUID, isLoaded } = useGigya();
  const pathname = usePathname();

  const uidInputRef = useRef<HTMLInputElement>(null);

  const { toast } = useToast();

  useEffect(() => {
    const storedUID = window.localStorage.getItem("_contactUID");

    if (storedUID) {
      setCurrentUID(storedUID);
    }
  });

  useEffect(() => {
    if (!currentUID) {
      setCurrentUID(window.localStorage.getItem("_contactUID") ?? "");
    }
  }, [currentUID, setCurrentUID]);

  return (
    <nav className="w-full">
      <Card className="p-2 flex justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Ball</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/uc1" title="Ball Journey 1">
                  Reserved
                    customers.
                  </ListItem>
                  <ListItem title="Reserved">
                    Not yet implemented
                  </ListItem>
                  <ListItem title="Reserved">
                    Not yet implemented
                  </ListItem>
                  <ListItem title="Reserved">
                    Not yet implemented
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Reserved</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/uc2" title="Reserved">
                  Reserved
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-4">
        <form
          className="flex gap-2"
          onSubmit={(submitEvent) => {
            submitEvent.preventDefault();

            const emailValue = uidInputRef.current?.value ?? "";

            if (!emailValue) {
              window.localStorage.removeItem("_userEmail");
              toast({
                title: "Removed Email",
                description: `Email removed`,
                variant: "destructive",
              });
              return;
            }

            window.localStorage.setItem("_userEmail", emailValue);

            toast({
              title: "Updated Email",
              description: `Email set to ${emailValue}`,
            });
          }}
        >
          <Input
            placeholder="Provide an email..."
            ref={uidInputRef}
          />
          <Button className="w-44 px-1" variant="default" type="submit">
            Set Email
          </Button>
        </form>


          <CXFlow.ItemForm
            triggerLabel="Create User"
            eventName="Create Customer"
            eventParameters={["email", "firstName", "lastName"]}
            cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
            isSDKLoaded={isLoaded}
          />

          <CXFlow.ItemForm
            triggerLabel="Register User"
            eventName="Registration MVP"
            eventParameters={["country", "ciamId"]}
            cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
            isSDKLoaded={isLoaded}
          />

          <ThemeToggle />
          <ResetButton />
        </div>
      </Card>
    </nav>
  );
};

const ResetButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="destructive" className="px-2">
          <RotateCcw />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure you want to reset this page?</DialogTitle>
          <DialogDescription>
            You are about to reset this page. This will clear all the data that
            is stored locally in your browser, including the Contact UID and all
            event parameters you have entered so far.
          </DialogDescription>
          <DialogDescription>
            This cannot be undone, are you sure?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="destructive"
            onClick={() => {
              const tempTheme = window.localStorage.getItem("theme");

              window.localStorage.clear();

              if (tempTheme) {
                window.localStorage.setItem("theme", tempTheme);
              }

              window.location.reload();
            }}
          >
            Yes, reset this page
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default RootLayout;
