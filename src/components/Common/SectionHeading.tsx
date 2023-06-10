import { Link } from "react-router-dom";

interface Props {
    heading: string;
    viewAll: string;
    clickViewMore: string;
}

const SectionHeading = ({ heading, viewAll, clickViewMore }: Props) => {
    return (
        <div className="flex items-center justify-between w-full">
            <p className="text-primary-white text-xl">{heading}</p>
            <Link to={clickViewMore}>
                <p className="text-primary-white">{viewAll}</p>
            </Link>
        </div>
    );
};

export default SectionHeading;
