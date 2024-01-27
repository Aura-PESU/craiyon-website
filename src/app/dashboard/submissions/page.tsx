import { cookies } from "next/headers";
import { getEntriesByTeamName as getImageEntriesByTeamName } from "@/actions/imageEntries";
import { getEntriesByTeamName as getTextEntriesByTeamName } from "@/actions/textEntries";
import { DataTable } from "./data-table";
import { columns as imageColumns, textColumns } from "./columns";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function Submissions() {
  const cookieStore = cookies();
  const team_name_cookie = cookieStore.get("team_name");
  if (!team_name_cookie) {
    return <div>Not logged in</div>;
  }
  const team_name = team_name_cookie.value;

  const imageEntries = await getImageEntriesByTeamName(team_name);
  const textEntries = await getTextEntriesByTeamName(team_name);
  return (
    <div className="flex flex-col p-8 gap-4 items-center">
      <h1 className="text-4xl font-semibold">Your Submissions</h1>
      <div className="w-full lg:w-1/2">
        <Tabs defaultValue="images" className="w-full">
          <TabsList className="w-full lg:h-14">
            <TabsTrigger className="w-full lg:h-12 lg:text-lg" value="images">
              Images
            </TabsTrigger>
            <TabsTrigger className="w-full lg:h-12 lg:text-lg" value="text">
              Text
            </TabsTrigger>
          </TabsList>
          <TabsContent value="images">
            <DataTable columns={imageColumns} data={imageEntries} />
          </TabsContent>
          <TabsContent value="text">
            <DataTable columns={textColumns} data={textEntries} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
