import { FlexCenter } from "@/styles/globals";

interface ItemsProps {
  label: string;
  title: string;
  contents: string[];
}

const Items = ({label, title, contents}: ItemsProps) => {

  return (
    <FlexCenter>
      <h1>{label}</h1>
      <p>{title}</p>
      {
        contents.map((content, idx) => (
          <div key={idx}>
            {content}
          </div>
        ))
      }
    </FlexCenter>
  )
}

export default Items;