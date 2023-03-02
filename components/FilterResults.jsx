import { useEffect } from "react";

const FilterResults = () => {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <div className="m-6">
      <p className="md:space-x-1 space-y-1 md:space-y-0 mb-4">
        <button
          className="btn btn-block btn-outline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample1"
          aria-expanded="false"
          aria-controls="collapseExample1"
        >
          category 1
        </button>
      </p>
      <div className="collapse" id="collapseExample1">
        <div className="block p-6 rounded-lg shadow-lg card">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
      <p className="md:space-x-1 space-y-1 md:space-y-0 mb-4">
        <button
          className="btn btn-block btn-outline "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample2"
          aria-expanded="false"
          aria-controls="collapseExample2"
        >
          category 2
        </button>
      </p>
      <div className="collapse" id="collapseExample2">
        <div className="block p-6 rounded-lg shadow-lg card">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
      <p className="md:space-x-1 space-y-1 md:space-y-0 mb-4">
        <button
          className="btn btn-block btn-outline  "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample3"
          aria-expanded="false"
          aria-controls="collapseExample3"
        >
          category 3
        </button>
      </p>
      <div className="collapse" id="collapseExample3">
        <div className="block p-6 rounded-lg shadow-lg card">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
      <p className="md:space-x-1 space-y-1 md:space-y-0 mb-4">
        <button
          className="btn btn-block btn-outline  "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample4"
          aria-expanded="false"
          aria-controls="collapseExample4"
        >
          category 4
        </button>
      </p>
      <div className="collapse" id="collapseExample4">
        <div className="block p-6 rounded-lg shadow-lg card">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
    </div>
  );
};

export default FilterResults;
