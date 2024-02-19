import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
// import {useGetUsersQuery} from '../../../slices/usersSlice'
import {useSelector} from "react-redux";
import CircularIndeterminate from "../../../components/progress/progress";
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';
import {toast} from "react-toastify";
import data from '../../../../db.json';

// ----------------------------------------------------------------------

export default function AppView() {

    const error = false;
    const isLoading = false;
    // @ts-ignore
    // const {userInfo: {user: {_id: userId}}} = useSelector((state) => state?.auth);
    const {userInfo} = useSelector((state) => state?.auth);

    // console.log('userInfo', userInfo);

    // const {data: userDetailedData, isLoading, error} = useGetUsersQuery();
    // const {data: userDetailedData, isLoading, error} = useGetUsersQuery(userId);

    const userDetailedData = data?.users?.data[0];

    // console.log('data', data);
    // console.log('userDetailedData', userDetailedData);

    // const membersCities = userDetailedData?.data[0].statId[0].membersCities;
    // const usersCount = userDetailedData?.data[0].statId[0].usersCount;
    // const avgLikes = userDetailedData?.data[0].statId[0].avgLikes;
    // const avgComments = userDetailedData?.data[0].statId[0].avgComments;
    // const avgInteractions = userDetailedData?.data[0].statId[0].avgInteractions;

    const membersCities = userDetailedData?.statId[0].membersCities;
    const usersCount = userDetailedData?.statId[0].usersCount;
    const avgLikes = userDetailedData?.statId[0].avgLikes;
    const avgComments = userDetailedData?.statId[0].avgComments;
    const avgInteractions = userDetailedData?.statId[0].avgInteractions;

    const seriesDataForCities = membersCities?.map(({name, value}) => ({label: name, value: value}));

    const newObj = {};

    userDetailedData?.weeklyActivityId.forEach(item => {
        // userDetailedData?.data[0]?.weeklyActivityId.forEach(item => {
        for (let key in item) {
            if (key === 'likes' || key === 'comments' || key === 'interactions') {
                newObj[key] = [];
            }
        }
    });

// Push values into corresponding arrays
//     userDetailedData?.data[0]?.weeklyActivityId.forEach(item => {
    userDetailedData?.weeklyActivityId.forEach(item => {
        for (let key in item) {
            if (key === 'likes' || key === 'comments' || key === 'interactions') {
                newObj[key].push(Math.round(item[key]));
            }
        }
    });


    const series = [];

    const sums = {
        interactions: 0,
        likes: 0,
        comments: 0,
    };

    // userDetailedData?.data[0]?.weeklyActivityId.forEach(item => {
    userDetailedData?.weeklyActivityId.forEach(item => {
        // Iterate over the keys of each object
        for (let key in item) {
            if (key === 'likes' || key === 'comments' || key === 'interactions') { // Exclude the 'time' key
                sums[key] += Math.round(item[key]);
            }
        }
    });

    for (let key in sums) {
        series.push({label: key, value: sums[key]});
    }

    if (error) {
        // @ts-ignore
        return toast.error(error);
    }

    if (isLoading) {
        return <CircularIndeterminate/>
    }

    return (
        <Container maxWidth='xl'>

            <Grid container spacing={3}>
                <Grid xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                        title='Users counts'
                        total={usersCount}
                        color='success'
                        icon={<img alt='icon' src='/assets/icons/glass/ic_glass_bag.png'/>}
                    />
                </Grid>

                <Grid xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                        title='Interactions'
                        total={avgInteractions}
                        color='info'
                        icon={<img alt='icon' src='/assets/icons/glass/ic_glass_users.png'/>}
                    />
                </Grid>

                <Grid xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                        title='Likes'
                        total={avgLikes}
                        color='warning'
                        icon={<img alt='icon' src='/assets/icons/glass/ic_glass_buy.png'/>}
                    />
                </Grid>

                <Grid xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                        title='Comments'
                        total={avgComments}
                        color='warning'
                        icon={<img alt='icon' src='/assets/icons/glass/ic_glass_buy.png'/>}
                    />
                </Grid>

                <Grid xs={12} md={6} lg={8}>
                    <AppWebsiteVisits
                        title={`Activity`}
                        chart={{
                            labels: [
                                '01/01/2023',
                                '02/01/2023',
                                '03/01/2023',
                                '04/01/2023',
                                '05/01/2023',
                                '06/01/2023',
                                '07/01/2023',
                                '08/01/2023',
                                '09/01/2023',
                                '10/01/2023',
                                '11/01/2023',
                            ],
                            series: [
                                {
                                    name: 'Interactions',
                                    type: 'column',
                                    fill: 'solid',
                                    data: newObj?.interactions,
                                },
                                {
                                    name: 'Likes',
                                    type: 'column',
                                    fill: 'solid',
                                    data: newObj?.likes,
                                },
                                {
                                    name: 'Comments',
                                    type: 'column',
                                    fill: 'solid',
                                    data: newObj?.comments,
                                },
                            ],
                        }}
                    />
                </Grid>

                <Grid xs={12} md={6} lg={4}>
                    <AppCurrentVisits
                        title='Current Activity'
                        chart={{
                            series,
                        }}
                    />
                </Grid>

                <Grid xs={12} md={6} lg={8}>
                    <AppConversionRates
                        title="Conversion Rates"
                        chart={{
                            series: seriesDataForCities,
                        }}
                    />
                </Grid>

                <Grid xs={12} md={6} lg={4}>
                    <AppCurrentSubject
                        title="Current Subject"
                        chart={{
                            categories: ['Interactions', 'Likes', 'Comments'],
                            series: [
                                {name: 'Interactions', data: newObj?.interactions},
                                {name: 'Likes', data: newObj?.likes},
                                {name: 'Comments', data: newObj?.comments},
                            ],
                        }}
                    />
                </Grid>

            </Grid>
        </Container>
    );
}
