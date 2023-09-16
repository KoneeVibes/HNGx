import { ReactComponent as HomeIcon } from "./homeIcon.svg";
import { ReactComponent as MoviesIcon } from "./movieIcon.svg";
import { ReactComponent as TVIcon } from "./tvIcon.svg";
import { ReactComponent as UpcomingIcon } from "./upcomingIcon.svg";
import { ReactComponent as LogoutIcon } from "./logoutIcon.svg";
import homeIcon from "./homeIcon.svg";
import movieIcon from "./movieIcon.svg";
import tvIcon from "./tvIcon.svg";
import upcomingIcon from "./upcomingIcon.svg";
import logoutIcon from "./logoutIcon.svg";
export { ReactComponent as Logo } from "./logo.svg";
export { ReactComponent as SearchIcon } from "./searchIcon.svg";
export { ReactComponent as MenuButton } from "./menuButton.svg";
export { ReactComponent as IMDBIcon } from "./imdbIcon.svg";
export { ReactComponent as StrawberryIcon } from "./strawberryIcon.svg";
export { ReactComponent as PlayIcon } from "./playIcon.svg";
export { ReactComponent as HeartIcon } from "./heartIcon.svg";
export { ReactComponent as ForwardIcon } from "./forwardIcon.svg";
export { ReactComponent as FacebookIcon } from "./facebookIcon.svg";
export { ReactComponent as InstagramIcon } from "./instagramIcon.svg";
export { ReactComponent as TwitterIcon } from "./twitterIcon.svg";
export { ReactComponent as YoutubeIcon } from "./youtubeIcon.svg";
export { ReactComponent as WatchIcon } from "./watchIcon.svg";
export { ReactComponent as FavoriteIcon } from "./favoriteIcon.svg";
export { ReactComponent as ShowtimesIcon } from "./showtimes.svg";
export { ReactComponent as OptionsIcon } from "./options.svg";
export { ReactComponent as DropdownIcon } from "./dropdownIcon.svg";
export const sidebarIcons = [
    {
        icon: <HomeIcon />,
        fallbackIcon: <img src={homeIcon} alt="Home Icon" />,
        name: "Home"
    },
    {
        icon: <MoviesIcon />,
        fallbackIcon: <img src={movieIcon} alt="Movie Icon" />,
        name: "Movies"
    },
    {
        icon: <TVIcon />,
        fallbackIcon: <img src={tvIcon} alt="TV Icon" />,
        name: "TV-Series"
    },
    {
        icon: <UpcomingIcon />,
        fallbackIcon: <img src={upcomingIcon} alt="Upcoming Icon" />,
        name: "Upcoming"
    },
    {
        icon: <LogoutIcon />,
        fallbackIcon: <img src={logoutIcon} alt="Logout Icon" />,
        name: "Logout"
    }
]