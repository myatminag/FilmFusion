interface Props {
    heading: string;
    viewAll: string;
    clickViewMore: () => void;
}

const SectionHeading = ({ heading, viewAll, clickViewMore }: Props) => {
    return (
        <div
            onClick={clickViewMore}
            className="flex items-center justify-between w-full"
        >
            <p className="text-primary-white text-xl">{heading}</p>
            <div>
                <p className="text-primary-white">{viewAll}</p>
            </div>
        </div>
    );
};

export default SectionHeading;
