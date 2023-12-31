import { ButtonProps } from "../types/types";

const SubmitButton = ({ userData }: ButtonProps) => {
  let disabled =
    userData.firstname === "" ||
    userData.lastname === "" ||
    userData.email === "" ||
    userData.date === ""
      ? true
      : false;
  return (
    <button
      type="submit"
      className="px-5 mb-2 py-2.5 text-sm font-medium text-black inline-flex items-center  bg-inactiveInput hover:bg-activeBackground focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center "
      style={
        disabled
          ? {
              color: "black",
              backgroundColor: "#9F9F9F",
              cursor: "not-allowed",
            }
          : {}
      }
      disabled={disabled}
      aria-label="send email"
    >
      <svg
        className="w-3.5 h-3.5 text-black mr-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 16"
      >
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
      </svg>
      Submit
    </button>
  );
};

export default SubmitButton;
