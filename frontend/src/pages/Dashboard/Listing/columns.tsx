import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";

export type Campsite = {
  id: string;
  campName: string;
  type: "Public" | "Private";
  location: string;
  listedDate: string;
  status: string;
};

export const columns: ColumnDef<Campsite>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "campName",
    header: "Name",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "listedDate",
    header: "Listed",
  },
  {
    header: "Actions",
    cell: () => {
      return (
        <div className="">
          <Pencil size="14" className=" mx-4" />
        </div>
      );
    },
  },
];
