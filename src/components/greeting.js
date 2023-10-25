import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchRandomGreeting from '../redux/actions/greetingAsyncActions';

const GreetingComponent = () => {
  const { greeting, loading, error } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && (
      <p>
        Error:
        {error.message}
      </p>
      )}
      {greeting && (
        <div>
          <h2>Random Greeting:</h2>
          <p>{greeting.greeting.message}</p>
        </div>
      )}
    </div>
  );
};

export default GreetingComponent;
