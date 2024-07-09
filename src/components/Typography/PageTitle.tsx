interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => (
  <div className="text-xl font-bold">{title}</div>
);

export default PageTitle;
