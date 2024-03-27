import { themes, type PrismTheme } from "prism-react-renderer";

export default {
  plain: {
    color: "#cdd6f4",
    backgroundColor: "#181825",
    selectionBackground: "#9399b240",
  },
  styles: [
    {
      types: ["variable", "regex"],
      style: {
        color: "#CDD6F4",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#94E2D5",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#6C7086",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "inserted"],
      style: {
        color: "#A6E3A1",
      },
    },
    {
      types: ["char", "constant"],
      style: {
        color: "#F5C2E7",
      },
    },
    {
      types: ["number", "builtin", "boolean", "changed"],
      style: {
        color: "#FAB387",
      },
    },
    {
      types: ["keyword", "tag"],
      style: {
        color: "#CBA6F7",
      },
    },
    {
      types: ["function"],
      style: {
        color: "#89B4FA",
        fontStyle: "italic",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "#F9E2AF",
        fontStyle: "italic",
      },
    },
    {
      types: ["attr-name", "selector", "deleted"],
      style: {
        color: "#F38BA8",
      },
    },
    {
      types: ["property"],
      style: {
        color: "#89B4FA",
      },
    },
    {
      types: ["symbol"],
      style: {
        color: "#EBA0AC",
      },
    },
  ],
} satisfies PrismTheme;
