import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  return (
    <section
      className="
    flex 
    items-center 
    justify-center 
    bg-background 
    h-[90vh]"
    >
      <div
        className="
      relative
      items-center
      w-full
      px-5
      py-12
      mx-auto
      lg:px-16
      max-w-7xl
      md:px-12
      "
      >
        <div
          className="
        max-w-3xl mx-auto text-center
        "
        >
          <div>
            <span className="w-auto px-6 py-3 rounded-full bg-secondary">
              <span className="text-sm font-medium text-primary">
                Rite your notes with ease
              </span>
            </span>

            <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
              Create Notes easily
            </h1>

            <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
              Rite allows you to create notes and save them for later. You can
              also share your notes with others.
            </p>
          </div>
          <div className="flex justify-center max-w-sm mx-auto mt-10">
            {(await isAuthenticated()) ? (
              <Button size={"lg"} className="w-full">
                <Link href={"/dashboard"}>Get Started &rarr;</Link>
              </Button>
            ) : (
              <RegisterLink className="w-full">
                <Button size={"lg"} className="w-full">
                  Sign Up for free
                </Button>
              </RegisterLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
