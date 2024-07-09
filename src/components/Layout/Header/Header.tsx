import { ReactComponent as Logo } from '@assets/logo/logo.svg';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@lib/hooks/redux';
import { logout } from '@store/member.slice';

const categories = [
  { title: '병실 관리', url: '/ward' },
  { title: '환자 관리', url: '/patient' },
  { title: '사고 기록', url: '/accident' },
];

const Header = () => {
  const member = useAppSelector((state) => state.member).value;
  const dispatch = useAppDispatch();
  return (
    <div className="fixed left-0 top-0 flex h-[62px] w-full items-center justify-between gap-8 border-b border-comment bg-white px-8">
      <Link to="/">
        <Logo />
      </Link>
      {member.isAuth && !member.isModerator && (
        <div className="flex flex-grow justify-start gap-10">
          {categories.map(({ title, url }) => (
            <Link className="text-base font-bold" to={url}>
              {title}
            </Link>
          ))}
        </div>
      )}
      {member.isAuth ? (
        <button
          onClick={() => dispatch(logout())}
          className="font-bold text-comment"
        >
          로그아웃
        </button>
      ) : (
        <Link to="/login" className="font-bold text-comment">
          로그인
        </Link>
      )}
    </div>
  );
};

export default Header;
