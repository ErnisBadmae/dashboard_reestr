import { useSelector } from 'react-redux';

const useAuth = () => {
    const { user } = useSelector((state) => state.auth);
    return !!user;
};

export default useAuth;

// menuList: {
//      sections: [
//          {
//              name: 'registries',
//              title: 'Список реестров',
//              items: [
//                  {
//                      linkHref: '/sds',
//                      linkName: 'Реестр СДС',
//                  },
//              ],
//           },
//           {
//              name: 'documents',
//              title: 'Заявления',
//              items: [
//                  {
//                      linkHref: '/declaration',
//                      linkName: 'Заявление СДС',
//                  },
//              ],
//           },
//           {
//              name: 'userInterface',
//              title: 'Пользовательский интерфейс',
//              items: [
//                  {
//                      linkHref: '/messages',
//                      linkName: 'Сообщения',
//                  },
//              ],
//          },
//      ];
//  }

// const { user } = useSelector((state) => state.menu.map((el) => {
//      el.items
// } ));
