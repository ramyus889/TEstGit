export default function About() {
  const fadeAOS = [
    {
      id: 25,
      name: "Fade-up",
      dataAos: "fade-up",
      duration: 1000,
    },
    {
      id: 59,
      name: "Fade-down",
      dataAos: "fade-down",
      duration: 1000,
    },
    {
      id: 752,
      name: "Fade-right",
      dataAos: "fade-right",
      duration: 1000,
    },
    {
      id: 4,
      name: "Fade-left",
      dataAos: "fade-left",
      duration: 1000,
    },
    {
      id: 42,
      name: "Fade-up-right",
      dataAos: "fade-up-right",
      duration: 1000,
    },
    {
      id: 17,
      name: "Fade-up-left",
      dataAos: "fade-up-left",
      duration: 1000,
    },
    {
      id: 79,
      name: "Fade-down-right",
      dataAos: "fade-down-right",
      duration: 1000,
    },
    {
      id: 13,
      name: "Fade-down-left",
      dataAos: "fade-down-left",
      duration: 1000,
    },
    {
      id: 36,
      name: "Flip-left",
      dataAos: "flip-left",
      duration: 1000,
    },
    {
      id: 87,
      name: "Flip-right",
      dataAos: "flip-right",
      duration: 1000,
    },
    {
      id: 30,
      name: "Flip-up",
      dataAos: "flip-up",
      duration: 1000,
    },
    {
      id: 98,
      name: "Flip-down",
      dataAos: "flip-down",
      duration: 1000,
    },
    {
      id: 54,
      name: "Zoom-in",
      dataAos: "zoom-in",
      duration: 1000,
    },
    {
      id: 1133,
      name: "Zoom-in-up",
      dataAos: "zoom-in-up",
      duration: 1000,
    },
    {
      id: 77,
      name: "Zoom-in-down",
      dataAos: "zoom-in-down",
      duration: 1000,
    },
    {
      id: 95,
      name: "Zoom-in-left",
      dataAos: "zoom-in-left",
      duration: 1000,
    },
    {
      id: 420,
      name: "Zoom-in-right",
      dataAos: "zoom-in-right",
      duration: 1000,
    },
    {
      id: 55,
      name: "Zoom-out",
      dataAos: "zoom-out",
      duration: 1000,
    },
    {
      id: 78,
      name: "Zoom-out-up",
      dataAos: "zoom-out-up",
      duration: 1000,
    },
    {
      id: 37,
      name: "Zoom-out-down",
      dataAos: "zoom-out-down",
      duration: 1000,
    },
    {
      id: 27,
      name: "Zoom-out-right",
      dataAos: "zoom-out-right",
      duration: 1000,
    },
    {
      id: 11,
      name: "Zoom-out-left",
      dataAos: "zoom-out-left",
      duration: 1000,
    },
    {
      id: 73,
      name: "Fade-up",
      dataAos: "fade-up",
      duration: 3000,
    },
    {
      id: 82,
      name: "Fade-down",
      dataAos: "fade-down",
      easy: "linear",
      duration: 1500,
    },
    {
      id: 72,
      name: "Fade-right",
      dataAos: "fade-right",
      easy: "ease-in-sine",
      offset: 300,
      duration: 1000,
    },
    {
      id: 75,
      name: "Fade-left",
      dataAos: "fade-left",
      anchor: "#example-anchor",
      offset: 500,
      duration: 500,
    },
    {
      id: 26,
      name: "Fade-zoom-in",
      dataAos: "fade-zoom-in",
      easy: "ease-in-back",
      duration: 300,
      offset: 0,
    },
    {
      id: 21,
      name: "Flip-left",
      dataAos: "flip-left",
      easy: "ease-out-cubic",
      duration: 2000,
    },
    {
      id: 94,
      name: "Fade-up",
      dataAos: "fade-up",
      placement: "top-bottom",
      duration: 1000,
    },
    {
      id: 41,
      name: "Fade-up",
      dataAos: "fade-up",
      placement: "center-bottom",
      duration: 1000,
    },
    {
      id: 180,
      name: "Fade-up",
      dataAos: "fade-up",
      placement: "bottom-bottom",
      duration: 1000,
    },
    {
      id: 137,
      name: "Fade-up",
      dataAos: "fade-up",
      placement: "top-center",
      duration: 1000,
    },
    {
      id: 1807,
      name: "Fade-up",
      dataAos: "fade-up",
      placement: "center-center",
      duration: 1000,
    },
    {
      id: 163,
      name: "Fade-up",
      dataAos: "fade-up",
      duration: 1000,
    },
  ];
  return (
    <div className="mx-20 my-20">
      <div className="inline-block">
        <div className="flex flex-col gap-[600px] text-center">
          {fadeAOS.map((fade) => (
            <div
              key={fade.id}
              data-aos={fade.dataAos}
              suppressHydrationWarning
              data-aos-easing={fade.easy}
              data-aos-offset={fade.offset}
              data-aos-duration={fade.duration}
              data-aos-anchor-placement={fade.placement}
              className=" rounded-xl border-2 border-[#31f6ac] px-8 py-4"
            >
              {fade.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
