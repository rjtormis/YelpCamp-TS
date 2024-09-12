import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import DeleteDialog from "@/components/custom/delete-dialog";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowLeft, Reply } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Message } from "@/interfaces/ui";
import BlockDialog from "./custom/block-dialog";

interface InboxSpecificItemInterface {
  message: Message;
  setViewMessageActive: Dispatch<SetStateAction<boolean>>;
}

function InboxSpecificItem({ message, setViewMessageActive }: InboxSpecificItemInterface) {
  const [replyActive, setReplyActive] = useState<boolean>(false);
  return (
    <div className="px-4 mx-2">
      <div className="flex gap-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" onClick={() => setViewMessageActive(false)}>
                <ArrowLeft size="16" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Back</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DeleteDialog
          title="Delete message"
          message="Are you sure that you want to delete this message?"
        />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" onClick={() => setReplyActive(!replyActive)}>
                <Reply size="16" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Reply</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <BlockDialog name={message.name} id={message.id} />
      </div>

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
              <p className="text-sm">{message.name}</p>
              <p className="text-xs">{message.subject}</p>
              {/* <p className="text-xs">Sending to: Test@gmail.com</p> */}
            </div>
          </div>
          <div>
            <p className="text-sm">{message.age}</p>
          </div>
        </div>
        <div className="my-4">
          <p>{message.content}</p>
        </div>
        {replyActive ? (
          <div>
            <Textarea placeholder={`Reply to ${message.name}`} />
            <div className="flex justify-end">
              <Button className="my-3 ml-auto">Send</Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default InboxSpecificItem;
