import PassengersInformationForm from "../components/PassengersInformationForm";
import FlightInformation from "../components/FlightInformation";
const ChoosedFlight = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-4/5 mx-auto my-auto sm:h-screen">
      <div>
        <PassengersInformationForm />
      </div>
      <div>
        <FlightInformation />
      </div>
    </div>
  );
};

export default ChoosedFlight;
