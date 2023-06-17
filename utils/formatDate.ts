export default function (date: string) {
    const siteMetadata = useAppConfig().metadata;

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const now = new Date(date).toLocaleDateString(siteMetadata.locale, options);

    return now;
}
