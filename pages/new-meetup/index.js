// ourdomain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
    }

    //function addmeetupHandler should be executed from inside the component when the form is submitted
    return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
