export const UserCollectionItem = ({ user, loading = false }) => {
    function formatAddress(address) {
      if (!address) return;
      return `${address.city}, ${address.street}, ${address.suite}, ${address.zipcode} `;
    }
  
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{formatAddress(user.address)}</td>
      </tr>
    );
  };
  