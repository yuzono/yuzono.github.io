---
# SPDX-License-Identifier: Apache-2.0
title: Getting started
titleTemplate: Guides
description: Essential information to help you set up the extension repo.
---

<script setup lang="ts">
    import AddRepoButton from "../../.vitepress/theme/components/AddRepoButton.vue";
    import { GITHUB_EXTENSION_REPO, GITHUB_EXTENSION_MIN_JSON } from "../../.vitepress/config/constants";
    import { GITHUB_EXTENSION_REPO_ANI, GITHUB_EXTENSION_MIN_JSON_ANI } from "../../.vitepress/config/constants";
</script>

# Getting started
Essential information to help you set up the extension repo.

## Adding the extension repo
### Before you start
Uninstall all existing extensions. You will not get extension updates otherwise.

### Adding the repository
For all modern variants of Tachiyomi (Komikku, TachiyomiSY, TachiyomiJ2K, TachiyomiAZ, Mihon),
or all modern variants of Aniyomi (Anikku, Animiru, Animetail),
click the button below to add the repository:

<AddRepoButton />

::: details Adding the repo manually
- Go to <nav to="extension-repos">
- Select "Add" at the bottom of your screen.
- Enter <a :href="GITHUB_EXTENSION_MIN_JSON">{{ GITHUB_EXTENSION_MIN_JSON }}</a> for Tachiyomi variants.
- Enter <a :href="GITHUB_EXTENSION_MIN_JSON_ANI">{{ GITHUB_EXTENSION_MIN_JSON_ANI }}</a> for Aniyomi variants.
:::

### Reinstall the extensions
Restart Tachiyomi/Aniyomi to reload the extension list, then reinstall all extensions.

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
step 1 in the [extensions](/extensions/) list.
