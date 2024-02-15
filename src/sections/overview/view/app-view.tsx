import { faker } from '@faker-js/faker';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// import Typography from '@mui/material/Typography';

import Iconify from '../../../components/iconify';

// import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
// import AppTrafficBySite from '../app-traffic-by-site';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';
import { useGetActivitiesQuery, useGetStatisticsQuery } from '../../../slices/activitySlice.ts';

// ----------------------------------------------------------------------

export default function AppView() {

  const { data, isLoading, error } = useGetActivitiesQuery();
  const { data: statisticData, isLoading: statistiLoading, error: statisticError } = useGetStatisticsQuery();

  console.log('statisticData', statisticData);

  const avgComments = statisticData?.data.avgComments;
  const avgInteractions = statisticData?.data.avgInteractions;
  const avgLikes = statisticData?.data.avgLikes;
  const avgVideoComments = statisticData?.data.avgVideoComments;
  const avgVideoLikes = statisticData?.data.avgVideoLikes;
  const avgVideoViews = statisticData?.data.avgVideoViews;

  const newObj = {};

// Iterate over the keys of the first object to initialize the arrays
  for (let key in data?.data?.weeklyActivity[0]) {
    if (key !== 'time') { // Exclude the 'time' key
      newObj[key] = [];
    }
  }

// Push values into corresponding arrays
  data?.data?.weeklyActivity.forEach(item => {
    for (let key in item) {
      if (key !== 'time') { // Exclude the 'time' key
        newObj[key].push(Math.round(item[key]));
      }
    }
  });

  console.log('newObj', newObj);


  const series = [];

// Initialize sum objects for each key
  const sums = {
    interactions: 0,
    likes: 0,
    comments: 0,
  };

// Iterate over the objects in the weeklyActivity array
  data?.data?.weeklyActivity.forEach(item => {
    // Iterate over the keys of each object
    for (let key in item) {
      if (key !== 'time') { // Exclude the 'time' key
        sums[key] += Math.round(item[key]);
      }
    }
  });

// Push the sums into the series array with the desired format
  for (let key in sums) {
    series.push({ label: key, value: sums[key] });
  }

  console.log(series);

  return (
    <Container maxWidth='xl'>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title='Comments'
            total={avgComments}
            color='success'
            icon={<img alt='icon' src='/assets/icons/glass/ic_glass_bag.png' />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title='Interactions'
            total={avgInteractions}
            color='info'
            icon={<img alt='icon' src='/assets/icons/glass/ic_glass_users.png' />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title='Likes'
            total={avgLikes}
            color='warning'
            icon={<img alt='icon' src='/assets/icons/glass/ic_glass_buy.png' />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title='Video Comments'
            total={avgVideoComments}
            color='error'
            icon={<img alt='icon' src='/assets/icons/glass/ic_glass_message.png' />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title='Video Likes'
            total={avgVideoLikes}
            color='error'
            icon={<img alt='icon' src='/assets/icons/glass/ic_glass_message.png' />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title='Video Views'
            total={avgVideoViews}
            color='error'
            icon={<img alt='icon' src='/assets/icons/glass/ic_glass_message.png' />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title={`${data?.data?.socialType} Activity`}
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
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        {/*<Grid xs={12} md={6} lg={4}>*/}
        {/*  <AppTrafficBySite*/}
        {/*    title="Traffic by Site"*/}
        {/*    list={[*/}
        {/*      {*/}
        {/*        name: 'FaceBook',*/}
        {/*        value: 323234,*/}
        {/*        icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,*/}
        {/*      },*/}
        {/*      {*/}
        {/*        name: 'Google',*/}
        {/*        value: 341212,*/}
        {/*        icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,*/}
        {/*      },*/}
        {/*      {*/}
        {/*        name: 'Linkedin',*/}
        {/*        value: 411213,*/}
        {/*        icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,*/}
        {/*      },*/}
        {/*      {*/}
        {/*        name: 'Twitter',*/}
        {/*        value: 443232,*/}
        {/*        icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,*/}
        {/*      },*/}
        {/*    ]}*/}
        {/*  />*/}
        {/*</Grid>*/}

      </Grid>
    </Container>
  );
}
