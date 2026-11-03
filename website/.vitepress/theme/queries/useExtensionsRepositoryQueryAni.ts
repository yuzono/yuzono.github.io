// Copyright (c) The Tachiyomi Open Source Project
// SPDX-License-Identifier: MPL-2.0

import type { UseQueryOptions } from '@tanstack/vue-query'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'
import { GITHUB_EXTENSION_JSON_ANI } from '../../config/constants'
import type { Extension as BaseExtension, Index as BaseIndex } from './useExtensionsRepositoryQuery'

// The anime repository publishes `index.json` in the same store format as the
// manga repository, so the shared types are reused here, plus the anime-only
// fields.
export type { Contact, Resources, Source } from './useExtensionsRepositoryQuery'
export { ContentWarning } from './useExtensionsRepositoryQuery'

export interface Extension extends BaseExtension {
  // Only present (as `true`) on extensions that stream through torrents.
  isTorrent?: boolean
}

export interface ExtensionList {
  extensions: Extension[]
}

export interface Index extends Omit<BaseIndex, 'extensionList'> {
  extensionList: ExtensionList
}

type UseExtensionsRepositoryQueryOptions<S = Extension[]> =
  UseQueryOptions<Extension[], Error, S>

export default function useExtensionsRepositoryQuery<S = Extension[]>(options: UseExtensionsRepositoryQueryOptions<S> = {}) {
  return useQuery<Extension[], Error, S>({
    // Must differ from the manga query key: both pages share one QueryClient,
    // so a shared key would serve the manga list on the anime page (and vice
    // versa) after client-side navigation.
    queryKey: ['extensions-aniyomi'],
    queryFn: async () => {
      const { data } = await axios.get<Index>(GITHUB_EXTENSION_JSON_ANI)
      const extensions = data?.extensionList?.extensions

      // Fail loudly on an unexpected index shape (e.g. another repository
      // format change) instead of rendering it as an empty repository.
      if (!Array.isArray(extensions)) {
        throw new TypeError('Unexpected anime repository index format.')
      }

      return extensions
    },
    initialData: () => [],
    refetchOnWindowFocus: false,
    ...options,
  })
}
