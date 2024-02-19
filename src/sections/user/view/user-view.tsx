import {useState} from 'react';
import {useSelector} from "react-redux";

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Scrollbar from '../../../components/scrollbar';

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import {applyFilter, getComparator} from '../utils';

// ----------------------------------------------------------------------

export default function UserPage() {

    // @ts-ignore
    const {userInfo: {user}} = useSelector((state) => state?.auth);

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [filterName, setFilterName] = useState('');


    const userData = [{"id": user._id, "name": user.username, "email": user.email, "role": user.role}];


    const handleSort = (event, id) => {
        const isAsc = orderBy === id && order === 'asc';
        if (id !== '') {
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(id);
        }
    };


    const dataFiltered = applyFilter({
        inputData: userData,
        comparator: getComparator(order, orderBy),
    });

    const notFound = !dataFiltered.length;

    return (
        <Container>
            <Card>
                <Scrollbar>
                    <TableContainer sx={{overflow: 'unset'}}>
                        <Table sx={{minWidth: 800}}>
                            <UserTableHead
                                order={order}
                                orderBy={orderBy}
                                rowCount={userData.length - 1}
                                onRequestSort={handleSort}
                                headLabel={[
                                    {id: 'name', label: 'Name'},
                                    {id: 'role', label: 'Role'},
                                    {id: 'email', label: 'Email'},
                                ]}
                            />
                            <TableBody>
                                {dataFiltered
                                    .map((row) => (
                                        <UserTableRow
                                            key={row.id}
                                            name={row.name}
                                            role={row.role}
                                            email={row.email}
                                        />
                                    ))}

                                {notFound && <TableNoData query={filterName}/>}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Scrollbar>
            </Card>
        </Container>
    );
}
