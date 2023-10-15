import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image: "first-meetup.jpg",
    address: "Some address 5, 12345, Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image: "second-meetup.jpg",
    address: "Some address 10, 12345, Some City",
    description: "This is second first meetup",
  },
];

function HomePage() {
  //at first time this component is rendered, loadedMeetup will be an ampty array
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    //this function is executed after the component function was executed
    //send http request and fetch data

    //set meetups we get from server, so the state is updated
    //and then this component will execute again, which will rerender the list with actual data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;
