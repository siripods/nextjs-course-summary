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

function HomePage1(props) {
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

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

//getStaticProps is executed before component function
//getStaticProps must be in page component (under /pages)
//its job is to prepare 'props' for this page
//code in this function is not seen in client side
export async function getStaticProps() {
  //fetch data from an api or database

  //

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, //after 10 seconds, if there is new request, then regenerate this page
  };
}

//this function will not run during build process
//instead run after deployment for every incoming request
//use getServerSideProps() if you need to access concrete request and response object
//or if you really have data that change multiple times every second
// export async function getServerSideProps(context) {
  
//   const req = context.req;
//   const res = context.res;

//   //fetch data from an api or database

//   //

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
