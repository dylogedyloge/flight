import { FormattedMessage } from "react-intl";

const PassengersInformationForm = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl p-8 ">
      <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              <FormattedMessage id="page.home.origin" />
            </span>
          </label>
          <select className="select select-bordered select-success">
            <option>Tehran</option>
            <option>Mashhad</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              <FormattedMessage id="page.home.destination" />
            </span>
          </label>
          <select className="select select-bordered select-success">
            <option>Mashhad</option>
            <option>Tehran</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              <FormattedMessage id="page.home.destination" />
            </span>
          </label>
          <select className="select select-bordered select-success">
            <option>Mashhad</option>
            <option>Tehran</option>
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <FormattedMessage id="page.home.numOfPassengers" />
          </label>
          <input
            type="number"
            className="input input-bordered input-success w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              <FormattedMessage id="page.home.class" />
            </span>
          </label>
          <select className="select select-bordered select-success">
            <option>Economy</option>
            <option>Business</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              <FormattedMessage id="page.home.destination" />
            </span>
          </label>
          <select className="select select-bordered select-success">
            <option>Mashhad</option>
            <option>Tehran</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              <FormattedMessage id="page.home.class" />
            </span>
          </label>
          <select className="select select-bordered select-success">
            <option>Economy</option>
            <option>Business</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              <FormattedMessage id="page.home.destination" />
            </span>
          </label>
          <select className="select select-bordered select-success">
            <option>Mashhad</option>
            <option>Tehran</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default PassengersInformationForm;
