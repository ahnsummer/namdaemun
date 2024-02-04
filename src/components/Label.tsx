import { FlexCenter } from '@/styles/globals';

type LabelProps = {
  label: string;
  content: string;
};

const Title = ({ label, content }: LabelProps) => {
  return (
    <FlexCenter className="flex-col my-8">
      <p className="text-3xl font-semibold">{label}</p>
      <p className="text-slate-500">{content}</p>
    </FlexCenter>
  );
};

export default Title;
