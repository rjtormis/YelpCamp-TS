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
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

interface DeleteDialog {
  message: string;
  title: string;
}

function DeleteDialog({ message, title }: DeleteDialog) {
  return (
    <Dialog>
      <DialogTrigger>
        {" "}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm">
                <Trash2 size="16" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>{title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {" "}
            <p className="my-auto flex font-bold">
              <Trash2 size="18" className="my-auto mr-2" />
              {title}
            </p>
          </DialogTitle>
          <DialogDescription>
            <div>{message}</div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteDialog;
