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
import { CircleX } from "lucide-react";

interface BlockDialogInterface {
  name: string;
  id: string;
}

function BlockDialog({ name, id }: BlockDialogInterface) {
  console.log(id);
  return (
    <Dialog>
      <DialogTrigger>
        {" "}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm">
                <CircleX size="16" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Block user</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {" "}
            <p className="my-auto flex font-bold">
              <CircleX size="18" className="my-auto mr-2" />
              Block User
            </p>
          </DialogTitle>
          <DialogDescription>
            <div>Are you sure that you want to block {name}</div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Block</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default BlockDialog;
