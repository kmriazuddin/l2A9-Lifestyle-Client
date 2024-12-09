"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { ShoppingBasket } from "lucide-react";
import { AuthContext } from "@/src/providers/AuthProvider";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { resetCart } from "@/src/redux/features/cartSlice/cartSlice";
import { logout } from "@/src/service/authServices";
import { Button } from "@/src/components/ui/button";

interface INavLinkChild {
  name: string;
  link: string;
}

interface INavLink {
  name: string;
  link?: string;
  child?: INavLinkChild[];
}

const NavbarUi = () => {
  const getDashboardLink = (role: string): string => {
    if (role === "ADMIN" || role === "SUPERADMIN") {
      return "/admin/dashboard";
    }
    return `/${role.toLowerCase()}/dashboard`;
  };
  const userData = useContext(AuthContext);

  const navLinkList: INavLink[] = [
    {
      name: "Products",
      link: "/product",
    },
    {
      name: "Shops",
      link: "/shop",
    },
    ...(userData?.user
      ? [
          {
            name: "Dashboard",
            link: getDashboardLink(userData.user.role),
          },
        ]
      : []),
  ];

  return (
    <div className="flex  justify-between w-full px-2">
      <div className="text-xl text-white font-bold">
        <Link href={"/"}>NextBuy</Link>
      </div>
      <div className=" gap-6 hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinkList.map((item) => {
              if (item.name && item?.child) {
                return (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                    <NavigationMenuContent className="grid ">
                      {item?.child.map((childItem) => (
                        <Link
                          className="w-full"
                          key={childItem.name}
                          href={childItem.link}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink
                            style={{ justifyContent: "flex-start" }}
                            className={`${navigationMenuTriggerStyle({
                              className:
                                "bg-transparent focus:bg-black focus:text-white text-white hover:bg-transparent hover:text-white hover:underline underline-offset-2 ",
                            })}  w-44 `}
                          >
                            {childItem.name}
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              } else {
                return (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.link as string} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle({
                          className:
                            "bg-transparent focus:bg-black focus:text-white text-white active:bg-transparent hover:bg-transparent hover:text-white  hover:underline underline-offset-2 ",
                        })}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              }
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-9">
          {userData?.user?.role == "CUSTOMER" && <Cart></Cart>}
          <Login></Login>
        </div>
      </div>
      <div className="md:hidden flex gap-9">
        {userData?.user?.role == "CUSTOMER" && <Cart></Cart>}
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none flex h-full items-center ">
            <FaBars className="text-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 md:hidden bg-black text-white ">
            {navLinkList.map((navLink) => {
              if (navLink?.name && navLink?.child) {
                return (
                  <DropdownMenuSub key={navLink.name}>
                    <DropdownMenuSubTrigger>
                      {navLink.name}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      {navLink.child.map((child) => (
                        <DropdownMenuItem key={child.name}>
                          <Link href={child.link}>{child.name}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                );
              }
              if (navLink?.name && navLink?.link) {
                return (
                  <DropdownMenuItem
                    key={navLink.name}
                    className="hover:bg-white hover:text-black"
                  >
                    <Link href={navLink.link}>{navLink.name}</Link>
                  </DropdownMenuItem>
                );
              }
            })}

            <div className="px-2 pb-1 mt-2  ">
              <Login></Login>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavbarUi;

const Cart = () => {
  const { cartItems } = useAppSelector((state) => state.cartSlice);

  return (
    <Link href={"/cart"} className="text-white flex gap-1 items-center">
      <ShoppingBasket />{" "}
      <span className="text-green-500">
        {cartItems.length > 0 && cartItems.length}
      </span>
    </Link>
  );
};

const Login = () => {
  const dispatch = useAppDispatch();
  const userData = useContext(AuthContext);
  const logoutUser = async () => {
    dispatch(resetCart());
    await logout();
    userData?.setIsLoading(true);
  };

  return (
    <>
      {" "}
      {!userData?.user ? (
        <Link href={"/login"}>
          {" "}
          <Button className="bg-white  hover:bg-white text-black hover:scale-95 duration-1000">
            {" "}
            Login
          </Button>
        </Link>
      ) : (
        <Button
          className="bg-white  hover:bg-white text-black hover:scale-95"
          onClick={() => logoutUser()}
        >
          Logout
        </Button>
      )}
    </>
  );
};
