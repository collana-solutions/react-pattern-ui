import collanaEslintConfig from "@collana-solutions/eslint-config";
export default [
  {
    // scripts/ holds the release tooling from release-playbook, kept as the template has it.
    ignores: ["**/cypress/", "scripts/"],
  },
  ...collanaEslintConfig.configs.flat["react-library"],
  {
    rules: {
      // The exported API spells it "SideBar" (PanelSideBarLayout, usePanelSideBarContext and others),
      // so the "sidebar" replacement would rename public names. Every other compound word is still checked.
      "unicorn/consistent-compound-words": ["error", { replacements: { sideBar: false } }],
    },
  },
];
