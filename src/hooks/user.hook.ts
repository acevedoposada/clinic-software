import { useEffect } from 'react';

import { useUserStore } from 'store/user/user.store';
import { fetchUser } from 'store/user/user.effect';

export const useUser = () => {
  const user = useUserStore();

  useEffect(() => {
    (async () => {
      if (!user.id) {
        user.setUser(await fetchUser());
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return user;
};
