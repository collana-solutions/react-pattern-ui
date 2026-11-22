import neolutionEslintConfig from "@neolution-ch/eslint-config-neolution";
export default [
  {
    // scripts/ holds the release tooling from release-playbook, kept as the template has it.
    ignores: ["**/cypress/", "scripts/"],
  },
  ...neolutionEslintConfig.configs.flat["react-library"],
];
