import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreatedUser = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);

    if (countdown === 0) navigate("/login");
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div>
      <p>The user has been created successfully.</p>
      <p>You will be redirected to the login page in {countdown} seconds.</p>
      <p>If you are not redirected automatically, follow this link to <a href="/login">login</a></p>
    </div>
  );
};
