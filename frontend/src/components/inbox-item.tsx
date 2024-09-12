import { MailOpen, MailWarning } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface InboxItemProps {
  id: string;
  name: string;
  age: string;
  subject: string;
  content: string;
  index: number;
  status: string;
  setMessageId: Dispatch<SetStateAction<string | null>>;
  setViewMessageActive: Dispatch<SetStateAction<boolean>>;
}

function InboxItem({
  id,
  name,
  age,
  subject,
  content,
  index,
  status,
  setMessageId,
  setViewMessageActive,
}: InboxItemProps) {
  return (
    <div
      className={`border border-solid p-3 rounded-xl ${
        index === 0 ? "" : "my-3"
      } hover:cursor-pointer`}
      onClick={() => {
        setMessageId(id);
        setViewMessageActive(true);
      }}
    >
      <section className="flex justify-between">
        <p className="text-sm font-bold flex">
          {status === "read" ? (
            <MailOpen size="14" className="my-auto mr-2" />
          ) : (
            <MailWarning size="14" className="my-auto mr-2" />
          )}
          {name}
        </p>
        <p className="text-xs ">{age}</p>
      </section>
      <p className="text-sm">{subject}</p>
      <p className="my-2 text-xs">{content}</p>
    </div>
  );
}

export default InboxItem;
