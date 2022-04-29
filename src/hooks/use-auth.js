import { useSelector } from 'react-redux';

export function useAuth() {
  const { name, inn, func, phone, mail, sds } = {}
  // useSelector(
  //   (state) => state?.user || {}
  // );

  return {
    isAuth: !!mail,
    name,
    inn,
    func,
    phone,
    sds,
  };
}
