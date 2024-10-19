import { Edit2Icon } from "lucide-react";

interface EditButtonProps {
  className?: string;
}

const EditButton: React.FC<EditButtonProps> = ({ className }) => {
  return (
    <span
      className={`${className} absolute rounded-full p-2 cursor-pointer bg-slate-200`}
    >
      <Edit2Icon className="h-4 w-4" />
    </span>
  );
};

export default EditButton;
