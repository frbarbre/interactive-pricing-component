import Slider from "react-input-slider";

export default function InputSlider({ x, active, setActive, setState }) {
  return (
    <div>
      <Slider
        axis="x"
        xstep={0.1}
        xmin={8}
        xmax={36}
        x={x}
        styles={{
          track: {
            backgroundColor: "hsl(224, 65%, 95%)",
            width: "100%",
            marginBlock: "32px",
          },
          active: {
            backgroundColor: "hsl(174, 77%, 80%)",
          },
          thumb: {
            width: 40,
            height: 40,
            backgroundColor: active
              ? "hsl(174, 86%, 35%)"
              : "hsl(174, 86%, 45%)",
            boxShadow: active
              ? "0px 6px 12px hsl(174, 86%, 35%)"
              : "0px 6px 12px hsl(174, 86%, 45%)",
            backgroundImage: "url('/icon-slider.svg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: active ? "" : "hsl(174, 86%, 55%)",
              opacity: active ? "" : "0.9",
              transition: "all 0.3s ease",
            },
          },
        }}
        onChange={({ x }) =>
          setState({
            x: x,
          })
        }
        onDragStart={() => setActive(true)}
        onDragEnd={() => setActive(false)}
      />
    </div>
  );
}
