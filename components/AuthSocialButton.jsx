import Image from "next/image";

const AuthSocialButton = ({ icon, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        w-full 
        justify-center 
        rounded-md 
        bg-white 
        px-4 
        py-2 
        text-gray-500 
        shadow-sm 
        ring-1 
        ring-inset 
        ring-gray-300 
        hover:bg-gray-50 
        focus:outline-offset-0
      "
    >
      <Image src={icon} width="25" height="25" alt="provider" />
    </button>
  );
};

export default AuthSocialButton;
