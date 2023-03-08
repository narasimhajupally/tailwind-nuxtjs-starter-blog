import { slug } from "github-slugger";

export default function (str: string) {
    return slug(str);
}
