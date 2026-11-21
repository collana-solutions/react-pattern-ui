---
"@collana-solutions/react-pattern-ui": patch
---

The package is now published as `@collana-solutions/react-pattern-ui`. The components and the styles are unchanged, and 6.2.0 is available under both names. To migrate, replace the old package with the new one:

```shell
npm uninstall @neolution-ch/react-pattern-ui
npm install @collana-solutions/react-pattern-ui
```

Then change every import from `@neolution-ch/react-pattern-ui` to `@collana-solutions/react-pattern-ui`, the styles included:

```ts
import { PanelSideBarLayout } from "@collana-solutions/react-pattern-ui";
import "@collana-solutions/react-pattern-ui/styles.css";
```

`@neolution-ch/react-pattern-ui` gets deprecated and receives no further releases. Its existing versions stay installable.
