export default function (date) {
    const siteMetadata = useAppConfig().metadata;

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const now = new Date(date).toLocaleDateString(siteMetadata.locale, options);

    return now;
}
