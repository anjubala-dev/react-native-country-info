# react-native-country-info



## Installation

#### # Using npm

```bash
npm install react-native-country-info
```

#### # Using yarn

```bash
yarn add react-native-country-info
```

## Demo

#### Code provided in Examples folder.

<!-- [![Screenshot1.gif](https://i.postimg.cc/jjpKJqR8/Screenshot1.gif)](https://postimg.cc/sB4bkrQS)
[![Screenshot2.gif](https://i.postimg.cc/L50xn5p5/Screenshot2.gif)](https://postimg.cc/XBdfPVX6) -->

## Usage

```
import CountryInfo from 'react-native-country-info'
...

<CountryInfo 
    code="+91" 
    showFlag={true} 
    onPressItem={(itemInfo) => {
        console.log("Country Name ", itemInfo.name);
        console.log("Country Code ", itemInfo.code);
        console.log("Country ISD code ", itemInfo.isd_code);
    }}
/>
```

### Props

- [`code`](#code)

- [`showFlag`](#showFlag)

- [`rowStyle`](#rowStyle)

- [`rowTextStyle`](#rowTextStyle)





### Methods

- [`onPressItem`](#onPressItem)

---

### code

code is present default value

| Type  | Required |
| ----- | -------- |
| string  | Yes      |

---

### showFlag

showFlag defalt value is true

| Type     | Required |
| -------- | -------- |
| boolean  | No      |

---

### onPressItem

function that should return country info like name, ISD code, code, flag

| Type     | Required |
| -------- | -------- |
| function | Yes       |

---

### rowStyle

style object for row

| Type   | Required |
| ------ | -------- |
| object | No      |

---

### rowTextStyle

style object for row text

| Type   | Required |
| ------ | -------- |
| object | No       |

---

## License

[MIT](https://choosealicense.com/licenses/mit/)
