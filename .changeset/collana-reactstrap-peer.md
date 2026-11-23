---
"@collana-solutions/react-pattern-ui": major
---

The peer dependency `@neolution-ch/reactstrap` is replaced by `@collana-solutions/reactstrap` (`^10.0.1`). It is the same reactstrap fork with React 19 support, published under its new name. The components and props of this package are unchanged.

To upgrade, install the new package in place of the old one:

```sh
npm uninstall @neolution-ch/reactstrap
npm install @collana-solutions/reactstrap
```

Then switch the reactstrap imports in your own code to the new name. Before:

```ts
import { Button } from "@neolution-ch/reactstrap";
```

After:

```ts
import { Button } from "@collana-solutions/reactstrap";
```
