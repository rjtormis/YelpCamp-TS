import InboxItem from "@/components/inbox-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  CircleX,
  Filter,
  MailPlus,
  MessageCircle,
  RefreshCcw,
  Reply,
  Trash2,
} from "lucide-react";
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

function Inbox() {
  const inboxItems = [
    {
      name: "Alice Johnson",
      age: "28",
      subject: "Meeting Reminder",
      content: "Don't forget about our meeting tomorrow at 10 AM.",
      status: "read",
    },
    {
      name: "Bob Smith",
      age: "34",
      subject: "Project Update",
      content: "The latest update on the project is available in the shared drive.",
      status: "read",
    },
    {
      name: "Carol White",
      age: "45",
      subject: "Invoice Attached",
      content: "Please find the attached invoice for the last month.",
      status: "unread",
    },
    {
      name: "David Brown",
      age: "50",
      subject: "Vacation Request",
      content: "I'd like to request vacation time from July 20th to July 30th.",
      status: "unread",
    },
    {
      name: "Eva Green",
      age: "30",
      subject: "Birthday Party",
      content: "You're invited to my birthday party next Saturday!",
      status: "read",
    },
    // {
    //   name: "Frank Black",
    //   age: "39",
    //   subject: "Team Lunch",
    //   content: "We are planning a team lunch next Friday. Let me know if you can join.",
    //   status: "read",
    // },
    // {
    //   name: "Grace Blue",
    //   age: "29",
    //   subject: "Performance Review",
    //   content: "Your performance review meeting is scheduled for next Monday.",
    //   status: "unread",
    // },
    // {
    //   name: "Henry Yellow",
    //   age: "47",
    //   subject: "Client Feedback",
    //   content: "The client has provided feedback on the latest deliverable. Please review.",
    //   status: "read",
    // },
    // {
    //   name: "Ivy Brown",
    //   age: "32",
    //   subject: "Workshop Invitation",
    //   content: "You are invited to attend a workshop on project management next week.",
    //   status: "unread",
    // },
    // {
    //   name: "Jack White",
    //   age: "38",
    //   subject: "Conference Details",
    //   content: "Here are the details for the upcoming conference. Please register soon.",
    //   status: "read",
    // },
  ];

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
              <Button size="sm" className="my-auto">
                <MailPlus size="16" />
              </Button>
              {/* <Button size="sm" className="my-auto">
                <Trash2 size="16" />
              </Button> */}
              <Button size="sm" className="my-auto">
                <Filter size="16" />
              </Button>
              <Button size="sm" className="my-auto">
                <RefreshCcw size="16" />
              </Button>
            </div>
          </div>
          <Input className="my-2" />
          <div className="mt-4 overflow-auto">
            {inboxItems.map((item, index) => (
              <InboxItem
                name={item.name}
                age={item.age}
                subject={item.subject}
                content={item.content}
                index={index}
                status={item.status}
              />
            ))}
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
        <div className="px-4 mx-2">
          <div className="flex gap-1">
            <Button size="sm" className="my-auto">
              <ArrowLeft size="16" />
            </Button>
            <Button size="sm" className="my-auto">
              <Trash2 size="16" />
            </Button>
            <Button size="sm" className="my-auto">
              <Reply size="16" />
            </Button>
            <Button size="sm" className="my-auto">
              <CircleX size="16" />
            </Button>
          </div>

          <InboxSpecificItem />
        </div>
      </div>
    </>
  );
}

export default Inbox;
