import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypePrettyCode from "rehype-pretty-code";
import { resolve } from 'path';
import CopyFilePlugin from "copy-webpack-plugin"
import WriteFilePlugin from 'write-file-webpack-plugin';
import {
	transformerNotationDiff
} from "@shikijs/transformers";


/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		config.plugins.push(new CopyFilePlugin({
			patterns: [
				{
					context: "posts/_posts",
					from: "**/*.{jpg,png}",
					to: resolve(process.cwd(), "public", "posts")
				},
			]
		}),

			new WriteFilePlugin()
		)

		return config
	}
	,


	transpilePackages: ['next-mdx-remote'],
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	// Optionally, add any other Next.js config below
}

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
		rehypePlugins: [[rehypePrettyCode, {
			theme: "dracula", transformers: [
				transformerNotationDiff()
			]
		}]],

	}
	// Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
