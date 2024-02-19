import {FC} from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------
interface UserTableRow {
    name: string,
    email: string,
    role: string,
}
const UserTableRow: FC<UserTableRow> = ({
  name,
  email,
  role,
}) => {

  return (
    <>
      <TableRow hover tabIndex={-1}>

        <TableCell>
            <Typography variant="subtitle2">
              {name}
            </Typography>
        </TableCell>

        <TableCell>{role}</TableCell>
        <TableCell>{email}</TableCell>

      </TableRow>
    </>
  );
}

export default UserTableRow;
