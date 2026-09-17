---
# SPDX-License-Identifier: Apache-2.0
title: Getting started
titleTemplate: Guides
description: Essential information to help you set up the extension store.
---

<script setup lang="ts">
    import AddRepoButton from "../../.vitepress/theme/components/AddRepoButton.vue";
    import { GITHUB_EXTENSION_REPO, GITHUB_EXTENSION_PB } from "../../.vitepress/config/constants";
    import AddRepoButtonAni from "../../.vitepress/theme/components/AddRepoButtonAni.vue";
    import { GITHUB_EXTENSION_REPO_ANI, GITHUB_EXTENSION_MIN_JSON_ANI } from "../../.vitepress/config/constants";
</script>

# Getting started
Essential information to help you set up the extension store.

## Adding the extension store
### Before you start
Uninstall all existing extensions. You will not get extension updates otherwise.

### Adding the store
For all modern variants of Mihon (TachiyomiSY, Komikku),
Or all modern variants of Aniyomi (Anikku, Animiru),
click the button below to add the store:

<AddRepoButton />
<AddRepoButtonAni />

::: details Adding the store manually
- Go to <nav to="extension-repos">
- Select "Add" at the bottom of your screen.
- Enter <a :href="GITHUB_EXTENSION_PB">{{ GITHUB_EXTENSION_PB }}</a> for Mihon variants.
- Enter <a :href="GITHUB_EXTENSION_MIN_JSON_ANI">{{ GITHUB_EXTENSION_MIN_JSON_ANI }}</a> for Aniyomi variants.
:::

### Reinstall the extensions
Restart app to reload the extension list, then reinstall all extensions.

::: tip
Go to <nav to="migrate"> to see what extensions you are missing.
:::

## Additional setup
### Trouble finding a specific series?
If you encounter difficulties while searching for a specific series, consider:

- Look up the manga/anime on [Google](https://google.com) or a manga/anime database such as [Anilist](https://anilist.co/).

- Double-check your spelling and try again, as some sources might use **Japanese romanized** titles instead of **English** ones.
  > Example: **Boku no Hero Academia** instead of **My Hero Academia**.

- Some sources may use different spellings or wordings for titles.
  > Example: **Bungo Stray Dogs** instead of **Bungou Stray Dogs**

  > Example: **3-gatsu no Lion** instead of **Sangatsu no Lion**.

- If you still cannot find the series, try searching for a website's extension you've found in
step 1 in the [Manga extensions](/extensions/) or [Anime extensions](/extensions-aniyomi/) list.
