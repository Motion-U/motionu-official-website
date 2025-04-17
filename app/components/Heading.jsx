export default function Heading({ text, lightFont }) {
  const isLightFont = lightFont ? "text-white" : "text-sky-800";
  return <h2 className={"text-3xl text-sky-800 font-bold " + isLightFont}>{text}</h2>;
}
