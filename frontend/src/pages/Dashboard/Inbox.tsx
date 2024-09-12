import InboxItem from "@/components/inbox-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, MessageCircle, RefreshCcw } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import InboxSpecificItem from "@/components/inbox-specific-item";
import InboxItemSkeleton from "@/components/loader/inbox-item-skeleton";
import InboxDialog from "@/components/custom/inbox-dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { Message } from "@/interfaces/ui";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

function Inbox() {
  const inboxItems = [
    {
      id: "1",
      name: "Alice Johnson",
      age: "28",
      subject: "Meeting Reminder",
      content: "Don't forget about our meeting tomorrow at 10 AM.",
      status: "read",
    },
    {
      id: "2",
      name: "Bob Smith",
      age: "34",
      subject: "Project Update",
      content: "The latest update on the project is available in the shared drive.",
      status: "read",
    },
    {
      id: "3",
      name: "Carol White",
      age: "45",
      subject: "Invoice Attached",
      content: "Please find the attached invoice for the last month.",
      status: "unread",
    },
    {
      id: "4",
      name: "David Brown",
      age: "50",
      subject: "Vacation Request",
      content: "I'd like to request vacation time from July 20th to July 30th.",
      status: "unread",
    },
    {
      id: "5",
      name: "Eva Green",
      age: "30",
      subject: "Birthday Party",
      content: "You're invited to my birthday party next Saturday!",
      status: "read",
    },
  ];
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [message, setMessage] = useState<Message | null>(null);
  const [messageId, setMessageId] = useState<string | null>(null);
  const [viewMessageActive, setViewMessageActive] = useState<boolean>(false);

  useEffect(() => {
    setMessages(inboxItems);
  }, []);

  useEffect(() => {
    if (messageId !== null && messages && messages.length >= 1) {
      const foundMsg = messages.find((message) => message.id === messageId) || null;
      setMessage(foundMsg);
    }
  }, [messageId, messages]);

  return (
    <>
      <div className="grid grid-cols-2 w-full ">
        <div className="px-4 mx-2 relative ">
          <div className="flex ">
            <p className="my-auto flex font-bold">
              <MessageCircle size="16" className="my-auto mr-2" />
              Inbox
            </p>
            <span className="ml-4 text-xs m-auto">422 Unread</span>
            <div className="flex gap-1">
              <InboxDialog to={null} title="Send a message to" message="Send a message to" />

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="sm">
                          <Filter size="16" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>Filter</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm">
                      <RefreshCcw size="16" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Refresh</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <Input className="my-2" />
          <div className="mt-4 overflow-auto">
            <InboxItemSkeleton />
            {messages && messages.length >= 1
              ? messages.map((item, index) => (
                  <InboxItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    age={item.age}
                    subject={item.subject}
                    content={item.content}
                    index={index}
                    status={item.status}
                    setMessageId={setMessageId}
                    setViewMessageActive={setViewMessageActive}
                  />
                ))
              : null}
          </div>
          <div className="absolute left-[30%] bottom-1 my-4">
            <Pagination className="">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
        {viewMessageActive && message !== null ? (
          <InboxSpecificItem message={message} setViewMessageActive={setViewMessageActive} />
        ) : null}
      </div>
    </>
  );
}

export default Inbox;
