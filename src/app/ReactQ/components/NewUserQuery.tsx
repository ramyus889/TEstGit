import { Spinner } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const res = await fetch("https://540551bc2c03d6ee.mokky.dev/frontend");
  return res.json();
};

export default function DataComponent() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["data", 5, { type: "done" }],
    queryFn: fetchData,
    staleTime: 5 * 1000,
  });

  if (isLoading) {
    return <Spinner size="lg" color="secondary" className="mt-40" />;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h1 className="my-3 border-b-2 border-white py-3 text-3xl">
        My Framework:
      </h1>
      <div className="">
        <ul className="grid grid-cols-3 gap-5">
          {data.map((item: { id: number; title: string }) => (
            <li
              key={item.id}
              className="rounded-xl border-2 border-white py-4 text-center"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
