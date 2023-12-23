import { LuPhoneCall, LuMapPin } from "react-icons/lu";
import { IoMailOpenOutline } from "react-icons/io5";
import { CiTwitter, CiLinkedin, CiFacebook, CiInstagram } from "react-icons/ci";

//----- Start Footer Data -----
export const FooterData = [
    {
        icon: <LuPhoneCall />,
        conect: "Mon-Fri from 8am to 5pm.",
        contact: "+1 850-597-3369",
    },
    {
        icon: <IoMailOpenOutline />,
        conect: "Our friendly team is there to help.",
        contact: "ronniechern@dayrep.com",
    },
    {
        icon: <LuMapPin />,
        conect: "Come say hello at our office HQ.",
        contact: "2076 DN Avenue Tallahassee, FL 32301",
    },
];
//----- End Footer Data -----
//----- Start Footer Icon -----
export const FooterIcon = [
    {
        TwitterIcon: <CiTwitter />,
    },
    {
        InstagramIcon: <CiInstagram />,
    },
    {
        LinkedinIcon: <CiLinkedin />,
    },
    {
        FacebookIcon: <CiFacebook />,
    },
];
//----- End Footer Icon -----
