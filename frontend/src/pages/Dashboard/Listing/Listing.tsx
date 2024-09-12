import { Plus, Tent, Trash2 } from "lucide-react";
import { DataTable } from "./data-table";
import { Campsite, columns } from "./columns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
function Listing() {
  const campsites: Campsite[] = [
    {
      id: "1",
      campName: "Sunny Meadows",
      type: "Public",
      location: "Mountain View, CA",
      listedDate: "2024-01-15",
      status: "Available",
    },
    {
      id: "2",
      campName: "Pine Grove",
      type: "Private",
      location: "Big Sur, CA",
      listedDate: "2024-03-20",
      status: "Booked",
    },
    {
      id: "3",
      campName: "Lakefront Retreat",
      type: "Public",
      location: "Lake Tahoe, CA",
      listedDate: "2024-05-10",
      status: "Available",
    },
    {
      id: "4",
      campName: "Forest Haven",
      type: "Private",
      location: "Yosemite, CA",
      listedDate: "2024-07-01",
      status: "Maintenance",
    },
    {
      id: "5",
      campName: "Desert Oasis",
      type: "Public",
      location: "Joshua Tree, CA",
      listedDate: "2024-02-18",
      status: "Available",
    },
  ];
  return (
    <div className="w-full">
      <div className="px-4 mx-2 grid grid-cols-2">
        <div>
          <div className="">
            <p className="my-auto flex font-bold">
              <Tent size="16" className="my-auto mr-2" />
              Campsite Listings
            </p>
            <p className="text-xs">All campsites you have listed.</p>
          </div>

          <div className="flex my-4 gap-4 justify-between">
            <Input placeholder="Search campground" />
            <div className="flex gap-2">
              <Link to="/dashboard/listings/new">
                <Button>
                  <Plus size={12} className="mr-1 my-auto" /> <span className="text-xs">New</span>
                </Button>
              </Link>
              <Button>
                <Trash2 size={12} className="mr-1 my-auto" />{" "}
                <span className="text-xs">Delete</span>
              </Button>
            </div>
          </div>
          <div className="my-2">
            <DataTable data={campsites} columns={columns} />
          </div>
        </div>
        <div>Q</div>
      </div>
    </div>
  );
}

export default Listing;
