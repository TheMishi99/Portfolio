import { useTranslation } from "react-i18next";
import CustomSelect from "./ui/CustomSelect";
import {
  CustomSelectOption,
  CustomSelectOptionValues,
} from "../typings/my-types";

const languageOptions = [
  {
    id: 1,
    title: "English",
    value: "en",
  },
  {
    id: 2,
    title: "Español",
    value: "es",
  },
] as const satisfies readonly CustomSelectOption[];

export default function LanguageSelect() {
  const { i18n, t } = useTranslation();

  const languageOnOptionSelect = (option: CustomSelectOption) => {
    i18n.changeLanguage(option.value);
  };
  return (
    <CustomSelect
      selectTitle={t("header.change_language")}
      options={languageOptions}
      defaultOptionValue={
        i18n.language as CustomSelectOptionValues<typeof languageOptions>
      }
      onOptionSelect={languageOnOptionSelect}
    />
  );
}
