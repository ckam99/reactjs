import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserCollection } from "./components/UserCollection";
import { fetchUsers } from "./data/userSlice";

const UserView = () => {
  const { users, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log("userview rendered");

  const fetchUsersAsync = useCallback(() => {
    setTimeout(() => {
      dispatch(fetchUsers());
    }, 200);
  }, [dispatch]);

  useEffect(() => {
    fetchUsersAsync();
  }, []);
  return (
    <div>
      <h1>List of users</h1>
      <UserCollection users={users} loading={loading} />
    </div>
  );
};

export default UserView;
