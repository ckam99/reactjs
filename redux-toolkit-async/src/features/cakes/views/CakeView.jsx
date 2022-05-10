import { useSelector, useDispatch } from "react-redux";
import { cakeActions } from "../data/cakeSlice";

export const CakeView = () => {
  const { numOfCakes } = useSelector((state) => state.cake);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(cakeActions.ordered())}>
        Order cakes
      </button>
      <button onClick={() => dispatch(cakeActions.restocked(7))}>
        Restock cakes
      </button>
    </div>
  );
};
