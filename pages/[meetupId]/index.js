import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="first-meetup.jpg"
      title="First Meetup"
      address="Some Stree5, Some City"
      description="This is first meetup"
    />
  );
}

export default MeetupDetails;
