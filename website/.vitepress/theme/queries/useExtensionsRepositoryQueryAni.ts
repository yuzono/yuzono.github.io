// Copyright (c) The Tachiyomi Open Source Project
// SPDX-License-Identifier: MPL-2.0

import type { UseQueryOptions } from '@tanstack/vue-query'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'
import { GITHUB_EXTENSION_JSON_ANI } from '../../config/constants'
import type { Extension, Index } from './useExtensionsRepositoryQuery'

// The anime repository publishes `index.json` in the same store format as the
// manga repository, so the shared types are reused here.
export type { Index, Contact, ExtensionList, Extension, Resources, Source } from './useExtensionsRepositoryQuery'
export { ContentWarning } from './useExtensionsRepositoryQuery'

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

      return data.extensionList?.extensions ?? []
    },
    initialData: () => [],
    refetchOnWindowFocus: false,
    ...options,
  })
}
