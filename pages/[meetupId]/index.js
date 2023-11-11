import MeetupDetail from "../../components/meetups/MeetupDetail";
import { DUMMY_MEETUPS } from "../../data/dummy-data";
import { useEffect } from "react";

function MeetupDetails(props) {
  const meetupData = props.meetupData;

  console.log("---MeetupDetails---");
  console.log(meetupData);

  if (meetupData == null) {
    console.log("meetupData is null");
    return (<p>No data !</p>);
  }

  console.log("write meetupData");
  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
}

//Because we are using dynamic path and also using getStaticProps()
//we need getStaticPaths() to pregenerate all URLs possible
export async function getStaticPaths() {
  return {
    //fallback tells that "paths" has all possible values or some of them only
    //fallsbck = false, means we provide all possible values of "paths" (meetupId in this case)
    //fallback = true, means if a path does not exist (meetupId not exist in "paths"), nextjs will try to generate page for this meetupId on the server
    fallback: true,

    //our data has 3 records, but we try giving only 2 meetupIds (m1 and m2)
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  //...
  //

  //assume meetupId is in URL (note we are using dynamic path [meetupid])
  const meetupId = context.params.meetupId;
  console.log("meetupId = ", meetupId);

  const filteredMeetup = DUMMY_MEETUPS.filter((meetup) => {
    //console.log("meetup.id = ", meetup.id);
    if (meetup.id === meetupId) return true;
  });

  if (filteredMeetup.length == 0) {
    return { props: { meetupData: null } };
  }

  console.log(filteredMeetup[0]);
  const meetup = filteredMeetup[0];
  return ({
    props: {
      meetupData: {
        id: meetup.id,
        image: meetup.image,
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
      },
    },
  });
}

export default MeetupDetails;
