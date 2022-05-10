export const TablePlaceholder = ({ children, colSpan = 1 }) => {
    return (
      <tr>
        <td align="center" colSpan={colSpan}>
          {children}
        </td>
      </tr>
    );
  };
  