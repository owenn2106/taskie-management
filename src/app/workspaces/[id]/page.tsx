const Page = ({ params }: { params: { id: string } }) => {
  return <div>Workspace ID: {params.id}</div>;
};

export default Page;
