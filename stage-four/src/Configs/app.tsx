import { NavItems, SMIcons, Services, Clients, Projects, Technologies } from "../Types/content.type";
import { ReactComponent as behance } from "../Assets/behance.svg";
import { ReactComponent as linkedIn } from "../Assets/linkedIn.svg";
import { ReactComponent as telegram } from "../Assets/telegram.svg";
import { ReactComponent as whatsapp } from "../Assets/whatsapp.svg";
import { ReactComponent as chaindustry } from "../Assets/chaindustry.svg";
import { ReactComponent as disgnPlus } from "../Assets/disgnPlus.svg";
import { ReactComponent as infinityAngel } from "../Assets/infinityAngel.svg";
import { ReactComponent as alibabaCloud } from "../Assets/alibabaCloud.svg";
import { ReactComponent as one2Cloud } from "../Assets/one2Cloud.svg";
import { ReactComponent as rbxs } from "../Assets/rbxs.svg";
import { ReactComponent as puli } from "../Assets/puli.svg";
import { ReactComponent as stepWatch } from "../Assets/stepWatch.svg";
import { ReactComponent as splabs } from "../Assets/splabs.svg";
import { ReactComponent as meta } from "../Assets/meta.svg";
import { ReactComponent as lemon } from "../Assets/lemon.svg";
import { ReactComponent as capitalBloc } from "../Assets/capitalBloc.svg";
import { ReactComponent as open } from "../Assets/open.svg";
export { ReactComponent as Headshot } from "../Assets/headshotBig.svg";
export { ReactComponent as Wave } from "../Assets/wave.svg";
export { ReactComponent as Arrow } from "../Assets/arrow.svg";
export { ReactComponent as BlockArrow } from "../Assets/blockArrow.svg"
export { ReactComponent as TelegramIcon } from "../Assets/telegramIcon.svg";
export { ReactComponent as WaveIcon } from "../Assets/smallWave.svg";

const PHONE_NUMBER = process.env.REACT_APP_PHONE_NUMBER

export const navItems: NavItems = [
    {
        name: "Home",
        link: ""
    },
    {
        name: "About",
        link: "#about"
    },
    {
        name: "Projects",
        link: "#projects"
    },
    {
        name: "Access CV",
        link: "https://drive.google.com/file/d/1YD7eWR5vdRjTojLMizMmDsDbnGs8I2AO/view?usp=sharing",
        target: "_blank"
    },
]

export const smIcons: SMIcons = [
    {
        name: "linkedIn",
        img: linkedIn,
        link: "https://www.linkedin.com/in/umorenofofonono/",
    },
    {
        name: "telegram",
        img: telegram,
        link: "",
    },
    {
        name: "whatsapp",
        img: whatsapp,
        link: `https://wa.me/${PHONE_NUMBER}`,
    },
    {
        name: "behance",
        img: behance,
        link: "",
    },
]

export const services: Services = ["Web Design", "Database Management", "API development", "DevOps & Deployment"]

export const clients: Clients = [
    chaindustry,
    disgnPlus,
    infinityAngel,
    alibabaCloud,
    one2Cloud,
    rbxs,
    puli,
    stepWatch,
    splabs,
]

export const projects: Projects = [
    {
        img: meta,
        name: "Lendsqr",
        description: "Web Design, API development, Database Management",
        layout: "row",
        url: "https://lendsqr-ten.vercel.app/"
    },
    {
        img: lemon,
        name: "Lemon Design",
        description: "Web Design",
        layout: "row-reverse",
        url: "https://lemonhq.xyz/"
    },
    {
        img: capitalBloc,
        name: "VRES",
        description: "Web Design",
        layout: "row",
        url: "https://valleyridgeenergy.com/"
    },
    {
        img: open,
        name: "Lilies",
        description: "Web Design, API development, Database Management",
        layout: "row-reverse",
        url: "https://lilies.netlify.app/"
    },
]

export const technologies: Technologies = ["React.js", "Express.js", "MongoDB", "Vercel", "Git"]
