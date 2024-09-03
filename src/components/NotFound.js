import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="not-found page">
      <h3>Page not found.</h3>
      <img src="" alt="not found" />

      <button onClick={handleBack}>Back to Home</button>
    </div>
  );
};
