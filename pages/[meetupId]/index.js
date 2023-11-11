import MeetupDetail from "../../components/meetups/MeetupDetail";
import { DUMMY_MEETUPS } from "../../data/dummy-data";
import { useEffect } from "react";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetails(props) {
  const meetupData = props.meetupData;

  console.log("---MeetupDetails---");
  console.log(meetupData);

  if (meetupData == null) {
    console.log("meetupData is null");
    return <p>No data !</p>;
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
  //fetch data from an api or database
  const client = await MongoClient.connect(
    "mongodb+srv://siripods:mongo1siri@cluster0.thb1hcq.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db("meetups");
  const meetupCollections = db.collection("meetups");
  const meetups = await meetupCollections.find({}, { _id: 1 }).toArray();
  client.close();
  //console.log(meetups);
  return {
    //fallback tells that "paths" has all possible values or some of them only
    //fallsbck = false, means we provide all possible values of "paths" (meetupId in this case)
    //fallback = true, means if a path does not exist (meetupId not exist in "paths"), nextjs will try to generate page for this meetupId on the server
    fallback: true,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),

    //our data has 3 records, but we try giving only 2 meetupIds (m1 and m2)
    /*paths: [
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
    ],*/
  };
}

export async function getStaticProps(context) {
  //assume meetupId is in URL (note we are using dynamic path [meetupid])
  const meetupId = context.params.meetupId;
  console.log("meetupId = ", meetupId);

  //fetch data for a single meetup
  const client = await MongoClient.connect(
    "mongodb+srv://siripods:mongo1siri@cluster0.thb1hcq.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db("meetups");
  const meetupCollections = db.collection("meetups");
  const selectedMeetup = await meetupCollections.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();
  //

  /*
  const filteredMeetup = DUMMY_MEETUPS.filter((meetup) => {
    //console.log("meetup.id = ", meetup.id);
    if (meetup.id === meetupId) return true;
  });

  if (filteredMeetup.length == 0) {
    return { props: { meetupData: null } };
  }

  console.log(filteredMeetup[0]);
  const selectedMeetup = filteredMeetup[0];*/
  console.log("selectedMeetup");
  console.log(selectedMeetup);

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
