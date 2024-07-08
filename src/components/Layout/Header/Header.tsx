import { ReactComponent as Logo } from '@assets/logo/logo.svg';
import { Link } from 'react-router-dom';

const categories = [
  { title: '병실 관리', url: '/admin/ward' },
  { title: '환자 관리', url: '/admin/patient' },
  { title: '사고 기록', url: '/admin/accident' },
];

const Header = () => (
  <div className="fixed left-0 top-0 flex h-[62px] w-full items-center gap-8 border-b border-comment bg-white px-8">
    <Link to="/admin">
      <Logo />
    </Link>
    <div className="flex flex-grow justify-start gap-10">
      {categories.map(({ title, url }) => (
        <Link className="text-base font-bold" to={url}>
          {title}
        </Link>
      ))}
    </div>
    <button className="font-bold text-comment">로그아웃</button>
  </div>
);

export default Header;
