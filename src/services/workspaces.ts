import axios from "axios";

// export async function getWorkspaces(userId: string) {
export async function getWorkspaces() {
  const response = await axios.get("/api/workspaces", {
    params: {
      userId: "091471b3-c332-44fc-bd80-2bd938f69a3f", // TODO: replace with actual logged in user id
    },
  });
  return response.data;
}
