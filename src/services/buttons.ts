//abusive type Array<object> it can be removed and still ts will recognize the type of "buttons" as an array of objects
export const buttons: Array<object> = [
  {
    id: "small-button",
    name: "PrimaryButtonComponent",
    size: "small",
  },
  {
    id: "default-button",
    name: "PrimaryButtonComponent",
    size: "default",
  },
  {
    id: "large-button",
    name: "PrimaryButtonComponent",
    size: "large",
  },
];
export const defaultButton =
  "inline-flex items-center rounded border border-transparent px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";
