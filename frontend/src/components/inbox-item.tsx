import { MailOpen, MailWarning } from "lucide-react";

interface InboxItemProps {
  name: string;
  age: string;
  subject: string;
  content: string;
  index: number;
  status: string;
}

function InboxItem({ name, age, subject, content, index, status }: InboxItemProps) {
  return (
    <div
      className={`border border-solid p-3 rounded-xl ${
        index === 0 ? "" : "my-3"
      } hover:cursor-pointer`}
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
