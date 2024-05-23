import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import { postmeta } from "../types/post";
const postsDir = path.join(process.cwd(), "posts/_posts");
//postsDir以下のファイル名を取得
export function getPostSlugs() {
	return fs.promises.readdir(postsDir);

}
//slugからpostの内容を取得
export function getPostBySlug(slug: string) {
	const fullPath = path.join(postsDir, slug, "index.mdx");
	const fileContents = fs.promises.readFile(fullPath, "utf8");
	return fileContents;
}
//slugからpostのメタデータを取得
export async function getPostMetaBySlug(slug: string) {
	const fullPath = path.join(postsDir, slug, "index.mdx");
	const fileContents = await fs.promises.readFile(fullPath, "utf8");
	//yamlヘッダのみを取得
	const yamlHeader = fileContents.split("---")[1];
	console.log(yamlHeader);
	const { title, date, coverImageUrl, tags } = yaml.load(yamlHeader) as postmeta;
	console.log(title, date, coverImageUrl, tags);
	return { title, date, coverImageUrl, slug, tags };
}