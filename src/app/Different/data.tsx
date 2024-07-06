let lastId = 0;

const handleId = () => {
  lastId++;
  return lastId;
};

// ! const random = (n: number) => Math.floor(Math.random() * n);

const hoverClass =
  "py-3 px-6 border-1 place-content-center flex items-center gap-3 rounded-xl";

export const data = [
  {
    id: handleId(),
    name: "Frontend",
    numrandom: 83,
    scale: 1.1,
    rotate: 30,
    transition: 0.2,
    color: [`border-[#69f084]`],
    class: [`text-[#69f084]`, `border-[#69f084]`, hoverClass],
  },
  {
    id: handleId(),
    name: "Backend",
    numrandom: 29,
    scale: 1.2,
    rotate: -30,
    transition: 0.3,
    color: [`border-[#1b9080]`],
    class: [`text-[#1b9080]`, `border-[#1b9080]`, hoverClass],
  },
  {
    id: handleId(),
    name: "Fullstack",
    numrandom: 40,
    scale: 1.3,
    rotate: 30,
    transition: 0.4,
    color: [`border-[#fd7127]`],
    class: [`text-[#fd7127]`, `border-[#fd7127]`, hoverClass],
  },
  {
    id: handleId(),
    name: "Devops",
    numrandom: 56,
    scale: 1.4,
    rotate: -30,
    transition: 0.5,
    color: [`border-[#eb176f]`],
    class: [`text-[#eb176f]`, `border-[#eb176f]`, hoverClass],
  },
];
