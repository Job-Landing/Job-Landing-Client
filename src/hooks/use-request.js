import axios from 'axios';
import { useState } from 'react';

const useRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      // clear the errors when new request
      setErrors(null);
      const response = await axios[method](url, {
        ...body,
        ...props,
      });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (error) {
      console.log(error);
      setErrors(
        <div className='error_msg'>
          <ul>
            {error.response.data.errors.map((err) => (
              <li key={err.field}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};

export default useRequest;
