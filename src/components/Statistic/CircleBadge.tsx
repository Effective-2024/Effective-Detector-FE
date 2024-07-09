interface CircleBadgeProps {
  title: string;
  content: string;
}

const CircleBadge = ({ title, content }: CircleBadgeProps) => (
  <div className="border-secondary-light h-[110px] w-[110px] rounded-full border-2 py-6 text-center text-xs font-bold">
    <p>{title}</p>
    <p className="mt-4 text-2xl text-danger">{content}</p>
  </div>
);

export default CircleBadge;
