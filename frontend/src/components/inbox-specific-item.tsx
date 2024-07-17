import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function InboxSpecificItem() {
  return (
    <div className="my-2">
      <div className="flex justify-between">
        <div className="flex">
          <div>
            <Avatar className="my-auto">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="ml-2">
            <p className="text-sm">Owner1</p>
            <p className="text-xs">Subject</p>
            <p className="text-xs">Sending to: Test@gmail.com</p>
          </div>
        </div>
        <div>
          <p className="text-sm">Oct 22, 2023, 9:00:00 AM</p>
        </div>
      </div>
      <div className="my-4">
        <p>
          Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project
          details and have some ideas I'd like to share. It's crucial that we align on our next
          steps to ensure the project's success. Please come prepared with any questions or insights
          you may have. Looking forward to our meeting!
        </p>
      </div>

      <div>
        <Textarea placeholder="Reply to william" />
        <div className="flex justify-end">
          <Button className="my-3 ml-auto">Send</Button>
        </div>
      </div>
    </div>
  );
}

export default InboxSpecificItem;
