type InputType = "email" | "password" | "text";

export const InputType: Record<InputType, string> = {
  text: "text",
  email: "email",
  password: "password",
};

export const defaultInputStyle =
  "block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm";
