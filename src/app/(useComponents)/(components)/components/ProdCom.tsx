export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="rounded-xl border border-slate-500 px-10 py-3 text-center ">
      Prod
    </div>
  );
}
