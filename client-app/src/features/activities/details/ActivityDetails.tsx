import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import { ActivityDetailedInfo } from "./ActivityDetailedInfo";
import  ActivityDetailedChat  from "./ActivityDetailedChat";
import  ActivityDetailedSidebar  from "./ActivityDetailedSidebar";
import { RootStoreContext } from "../../../app/stores/rootStore";

interface DetailParams {
  id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history
}) => {
  const rootStore = useContext(RootStoreContext);
  const { activity, loadActivity, loadingInitial } = rootStore.activityStore;

  useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity, match.params.id, history]);

  if (loadingInitial)
    return <LoadingComponent content="Loading stuff..." />;

  if (!activity)
  return <h2>Event not found</h2>

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailedHeader activity={activity}/>
        <ActivityDetailedInfo activity={activity}/>
        <ActivityDetailedChat/>
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivityDetailedSidebar attendees={activity.attendees}/>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDetails);

  /* <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity!.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activity!.title}</Card.Header>
        <Card.Meta>
          <span> {activity!.date}</span>
        </Card.Meta>
        <Card.Description>{activity!.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            as={Link} to={`/manage/${activity.id}`}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={() => history.push('/activities')}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card> */

