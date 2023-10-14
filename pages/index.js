import MeetupList from "../components/meetups/MeetupList";

function HomePage() {
  const DUMMY_MEETUPS = [
    {
      id: "m1",
      title: "A first meetup",
      image:
        "https://en.wikipedia.org/wiki/Thomas_Wolfe#/media/File:Thomas_Wolfe's_Home.jpg",
      address: "Some address 5, 12345, Some City",
      description: "This is a first meetup",
    },
    {
      id: "m2",
      title: "A second meetup",
      image:
        "https://en.wikipedia.org/wiki/Thomas_Wolfe#/media/File:Thomas_Wolfe's_Home.jpg",
      address: "Some address 10, 12345, Some City",
      description: "This is second first meetup",
    },
  ];

  return (
    
      <MeetupList meetups={DUMMY_MEETUPS} />
    
  );
}

export default HomePage;
