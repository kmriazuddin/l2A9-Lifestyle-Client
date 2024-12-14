"use client";

import { Dialog, DialogTitle } from "@/components/ui/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { AuthContext } from "@/providers/AuthProvider";
import { DialogContent } from "@radix-ui/react-dialog";
import {
  ShoppingBag,
  Home,
  Database,
  Settings,
  ListOrderedIcon,
  ListOrdered,
  ShoppingCartIcon,
  ChartNoAxesGanttIcon,
  MessageCircleHeartIcon,
} from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
    roles: ["ADMIN", "SUPERADMIN", "CUSTOMER", "VENDOR"],
  },
  //admin link
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: Database,
    roles: ["ADMIN", "SUPERADMIN"],
  },
  {
    roles: ["ADMIN", "SUPERADMIN"],
    child: [
      { url: "/admin/manage-user", title: "Manage User", icon: Settings },
    ],
  },
  {
    roles: ["ADMIN", "SUPERADMIN"],
    child: [
      {
        url: "/admin/manage-shop",
        title: "Manage Shop",
        icon: ShoppingCartIcon,
      },
    ],
  },
  {
    roles: ["ADMIN", "SUPERADMIN"],
    child: [
      {
        url: "/admin/manage-category",
        title: "Manage Category",
        icon: ChartNoAxesGanttIcon,
      },
    ],
  },
  {
    roles: ["ADMIN", "SUPERADMIN"],
    child: [
      { url: "/admin/view-order", title: "All Order", icon: ListOrdered },
      {
        url: "/admin/pending-order",
        title: "Pending Order",
        icon: ListOrdered,
      },
    ],
  },

  // Vendor
  {
    title: "Dashboard",
    url: "/vendor/dashboard",
    icon: Database,
    roles: ["VENDOR"],
  },
  {
    roles: ["VENDOR"],
    child: [
      { url: "/vendor/manage-shop", title: "Manage Shop", icon: Settings },
      { url: "/vendor/shop", title: "Your Shop", icon: ShoppingBag },
    ],
  },
  {
    roles: ["VENDOR"],
    child: [
      {
        url: "/vendor/view-orders",
        title: "All Order",
        icon: ListOrderedIcon,
      },
    ],
  },
  {
    roles: ["VENDOR"],
    child: [
      {
        url: "/vendor/review-rating",
        title: "User Reviews",
        icon: MessageCircleHeartIcon,
      },
    ],
  },
  // customer
  {
    title: "Dashboard",
    url: "/customer/dashboard",
    icon: Database,
    roles: ["CUSTOMER"],
  },
  {
    roles: ["CUSTOMER"],
    child: [
      {
        url: "/customer/order-history",
        title: "Order History",
        icon: ListOrderedIcon,
      },
    ],
  },
];

export default function AppSidebar() {
  const userData = useContext(AuthContext);

  const filteredItems = items.filter((item) =>
    item.roles.includes(userData?.user?.role as string)
  );

  return (
    <Dialog>
      <Sidebar className="absolute">
        <SidebarContent>
          <DialogContent>
            <DialogTitle></DialogTitle>
          </DialogContent>
          <SidebarGroup>
            <SidebarGroupLabel>FinsX Shop Bangladesh</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="ms-2">
                {filteredItems.map((item) => (
                  <div key={item.title}>
                    {/* Parent Item */}
                    {item.url && (
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )}

                    {/* Child Items */}
                    {item.child && (
                      <>
                        {item.child.map((child) => (
                          <SidebarMenuItem key={child.title}>
                            <SidebarMenuButton asChild>
                              <Link className="" href={child.url}>
                                <child.icon />
                                <span>{child.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </>
                    )}
                  </div>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Dialog>
  );
}
