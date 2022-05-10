import { TablePlaceholder } from "../../../components/TablePlaceholder";
import { UserCollectionItem } from "./UserCollectionItem";

export const UserCollection = ({ users = [], loading = false }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <TablePlaceholder colSpan={5}>loading...</TablePlaceholder>
        ) : (
          <>
            {users.length ? (
              users.map((user) => (
                <UserCollectionItem user={user} key={user.id} />
              ))
            ) : (
              <TablePlaceholder colSpan={5}>No data available</TablePlaceholder>
            )}
          </>
        )}
      </tbody>
    </table>
  );
};
