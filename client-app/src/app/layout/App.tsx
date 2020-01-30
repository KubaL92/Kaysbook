import React, {useEffect, Fragment, useContext } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { LoadingComponent } from "./LoadingComponent";
import ActivityStore from '../stores/activityStore';
import { observer } from 'mobx-react-lite';

const App = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
      activityStore.loadActivities();
    // axios
    //   .get<IActivity[]>("http://localhost:5000/api/activities")
    // agent.Activities.list()
    //   .then(response => {
    //     let activities: IActivity[] = [];
    //     response.forEach((activity) => {
    //       activity.date = activity.date.split('.')[0];
    //       activities.push(activity);
    //     })
    //     setActivities(activities);
    //   }).then(() => setLoading(false));
  }, [activityStore]);

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading activities...' />

  return (
    <Fragment>
      <NavBar/>
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard  />
      </Container>
    </Fragment>
  );
};

export default observer (App);
