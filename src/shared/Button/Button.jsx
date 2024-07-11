import { IoIosArrowBack } from "react-icons/io";
import { FaComments } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
// import { useState } from "react";
// import "./Button.css";
const Button = ({ btnText, radius, className, onClick ,setIsClicked}) => {
    // const [isclicked,setIsClicked] = useState(false);
    const renderIcon = () => {
        switch (btnText) {
            case "اقرأ المزيد":
            case "إحجز الآن":
            case "استكشف المزيد":
            case "من هنا":
                return <IoIosArrowBack />;
            case "اكتب تعليق":
                return <FaComments />;
            case "اضف الى المفضلة":
                return <IoHeart />;
            case "تقييم":
                return <IoMdStar />;

            case "ابحث":
            case "تأكيد الدفع":
                return "";
        }
    };
    const ButtonStyle = {
        backgroundColor: "#8DD3BB",
        borderColor: "white",
        outline: "solid 1px #8DD3BB",
        borderRadius: `${radius}`,
        color: "#112211",
        opacity : setIsClicked ? 0.5:1

    };

    return (
        <button
            type="button"
            className={`btn btn-lg ${className} text-center`}
            style={ButtonStyle}
            onClick={onClick}
        >
            {renderIcon()} {btnText}
        </button>
    );
};

export default Button;
