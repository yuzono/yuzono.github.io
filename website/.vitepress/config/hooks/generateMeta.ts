// Copyright (c) The Tachiyomi Open Source Project
// SPDX-License-Identifier: MPL-2.0

import type { HeadConfig, TransformContext } from 'vitepress'

function generateMeta(context: TransformContext, hostname: string) {
  const head: HeadConfig[] = []
  const { pageData } = context
  const stringValue = (value: unknown) =>
    typeof value === 'string' || typeof value === 'number' ? String(value) : undefined
  const customTitle = stringValue(pageData.frontmatter.customMetaTitle)
  const title = customTitle || stringValue(pageData.frontmatter.title) || pageData.title

  const url = `${hostname}/${pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2')}`

  head.push(['link', { rel: 'canonical', href: url }])
  head.push(['meta', { property: 'og:url', content: url }])
  head.push(['meta', { name: 'twitter:url', content: url }])
  // head.push(['meta', { name: 'twitter:card', content: 'summary_large_image' }])

  const theme = stringValue(pageData.frontmatter.theme)
  if (theme)
    head.push(['meta', { name: 'theme-color', content: theme }])

  const type = stringValue(pageData.frontmatter.type)
  if (type)
    head.push(['meta', { property: 'og:type', content: type }])

  if (customTitle) {
    head.push([
      'meta',
      {
        property: 'og:title',
        content: title,
      },
    ])
    head.push([
      'meta',
      {
        name: 'twitter:title',
        content: title,
      },
    ])
    head.push(['meta', { property: 'og:site_name', content: '' }])
  }
  else {
    head.push(['meta', { property: 'og:title', content: title }])
    head.push(['meta', { name: 'twitter:title', content: title }])
  }
  if (pageData.frontmatter.description) {
    head.push([
      'meta',
      {
        property: 'og:description',
        content: pageData.frontmatter.description,
      },
    ])
    head.push([
      'meta',
      {
        name: 'twitter:description',
        content: pageData.frontmatter.description,
      },
    ])
  }
  head.push(
    [
      'meta',
      {
        property: 'og:image',
        content: `${hostname}/android-chrome-192x192.png`,
      },
    ],
  )
  // if (pageData.frontmatter.image) {
  //   head.push([
  //     'meta',
  //     {
  //       property: 'og:image',
  //       content: `${hostname}/${pageData.frontmatter.image.replace(/^\//, '')}`,
  //     },
  //   ])
  //   head.push([
  //     'meta',
  //     {
  //       name: 'twitter:image',
  //       content: `${hostname}/${pageData.frontmatter.image.replace(/^\//, '')}`,
  //     },
  //   ])
  // }
  // else {
  //   const url = pageData.filePath.replace('index.md', '').replace('.md', '')
  //   const imageUrl = `${url}/__og_image__/og.png`.replace(/\/\//g, '/').replace(/^\//, '')

  //   head.push(['meta', { property: 'og:image', content: `${hostname}/${imageUrl}` }])
  //   head.push(['meta', { property: 'og:image:width', content: '1200' }])
  //   head.push(['meta', { property: 'og:image:height', content: '628' }])
  //   head.push(['meta', { property: 'og:image:type', content: 'image/png' }])
  //   head.push(['meta', { property: 'og:image:alt', content: pageData.frontmatter.title }])
  //   head.push(['meta', { name: 'twitter:image', content: `${hostname}/${imageUrl}` }])
  //   head.push(['meta', { name: 'twitter:image:width', content: '1200' }])
  //   head.push(['meta', { name: 'twitter:image:height', content: '628' }])
  //   head.push(['meta', { name: 'twitter:image:alt', content: pageData.frontmatter.title }])
  // }
  const tag = stringValue(pageData.frontmatter.tag)
  if (tag)
    head.push(['meta', { property: 'article:tag', content: tag }])

  if (pageData.frontmatter.date) {
    head.push([
      'meta',
      {
        property: 'article:published_time',
        content: String(pageData.frontmatter.date),
      },
    ])
  }
  if (pageData.lastUpdated && pageData.frontmatter.lastUpdated !== false) {
    head.push([
      'meta',
      {
        property: 'article:modified_time',
        content: new Date(pageData.lastUpdated).toISOString(),
      },
    ])
  }

  return head
}

export default generateMeta
