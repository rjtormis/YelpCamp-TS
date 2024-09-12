import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";

import { Textarea } from "../ui/textarea";

import { MailIcon, MessageCircle } from "lucide-react";

interface InboxDialogProps {
  title: string;
  to: string | null;
  message: string;
}

function InboxDialog({ title, to, message }: InboxDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>
        {" "}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm">
                <MailIcon size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Send a message to {to}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {" "}
            <p className="my-auto flex font-bold">
              <MessageCircle size="18" className="my-auto mr-2" />
              {title}
            </p>
          </DialogTitle>
          <DialogDescription>
            <div className="grid w-full items-center gap-1.5 my-1">
              <Label htmlFor="email" className="">
                To : {to !== null ? to : null}
              </Label>
              {to !== null ? null : <Input id="email" className="w-full" />}
            </div>
            <div className="my-4">
              <Textarea className=" resize-none" placeholder={message} rows={5} />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default InboxDialog;
