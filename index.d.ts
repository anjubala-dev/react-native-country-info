import type * as React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";

declare module "react-native-country-info" {
  export type CountryInfoProps = {
    /**
      * code is ISD country code
      * default value is +91
      * use type required
      */
    code: string;
    /**
     *  default value is true
     *  pass the boolean value
     *  use type optional
     */
    showFlag: boolean;
    /**
     * function recieves selected item information of country
     */
    onPressItem: (selectedItem: any) => void;
  };

  export default class CountryInfo extends React.Component<CountryInfoProps> {
    
    /**
     * Open the dropdown.
     */
     openCountryModal(): void;
    /**
     * Close the dropdown.
     */
     closeCountryModal(): void;
  }
}
