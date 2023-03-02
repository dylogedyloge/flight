import FlightCard from "../components/FlightCard";
import PassengersInformationForm from "../components/PassengersInformationForm";
import DetailedPriceCard from "../components/DetailedPriceCard";
const BuyTicket2 = () => {
  return (
    <div>
      <div>
        <FlightCard />
        <PassengersInformationForm />
        <DetailedPriceCard />
        <div className=" px-8">
          <div className="btn btn-warning  btn-block my-6">checkout</div>
        </div>
      </div>
    </div>
  );
};
export default BuyTicket2;
