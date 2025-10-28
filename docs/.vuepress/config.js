import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
	lang: 'ru-RU',
	base: "/docs/",

	// title: 'OKS API Docs',
	description: 'OKS API Docs',
	apiDomain: 'https://banking.oks-group.kz',
	head: [
		['link', { rel: 'icon', href: '/docs/favicon.ico' }]
	],

	theme: defaultTheme({
		lastUpdated: false,
		contributors: false,

		logo: '/images/oks-logo.svg',
		navbar: [
			{ text: 'Руководство', link: '/guide/' },
			{ text: 'Справочник API', link: '/api/' },
		],

		sidebar: {
			'/guide/': [
				{
				text: 'Руководство',
				children: [
					'/guide/README.md',
					'/guide/authentication.md',
					'/guide/catalog.md',
					'/guide/booking.md',
				],
				},
			],
			'/api/': [
				{
				text: 'Справочник API',
				children: [
					'/api/README.md',
					'/api/complexes.md',
					'/api/apartments.md',
					// '/api/bookings.md',
				],
				},
			],
		},
	}),

	bundler: viteBundler(),
})
