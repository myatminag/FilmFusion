import { Helmet } from "react-helmet-async";

interface Props {
    title: string;
}

const MetaData = ({ title }: Props) => {
    return (
        <Helmet prioritizeSeoTags>
            <title>{title}</title>
        </Helmet>
    );
};

export default MetaData;
