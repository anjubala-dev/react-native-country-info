import React, { useEffect, useState } from 'react'
import { StyleSheet, Dimensions, Text, View, TouchableOpacity, Modal, SafeAreaView, TextInput, FlatList } from 'react-native'
import cInfo from './info/countryinfo.json'

const height = Dimensions.get('screen').height;

const CountryInfo = ({
  name,
  code,
  showFlag,
  showIsdCode,
  styleSearch,
  styleItme,
  styleLabel,
  styleError,
  onPressItem = () => null,
}) => {

  const [showPicker, setShowPicker] = useState(false)
  const [txtCountryName, setTxtCountryName] = useState(name)
  const [countries, setCountries] = useState(cInfo)

  useEffect(() => {
    const searchByName = async () => {
      if (txtCountryName.length > 0) {
        setCountries(cInfo.filter(item => item.name.match(new RegExp(txtCountryName, "i"))))
      }
      else {
        setCountries(cInfo)
      }
    };
    const timerId = setTimeout(() => {
      searchByName()
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [txtCountryName]);

  showModel = () => {
    setShowPicker(!showPicker)
  }

  onSearch = (txtValue) => {
    setTxtCountryName(txtValue)
  }

  const renderItem = ({ item, index }) => {

    return <TouchableOpacity onPressOut={() => onPressItem(item)} style={{ flex: 1, borderColor: 'green', borderWidth: 0, borderRadius: 10, flexDirection: 'row', width: '100%', paddingVertical: 15, justifyContent: 'space-between' }} activeOpacity={0} onPress={showModel}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {showFlag && <Text style={{ fontSize: 25, marginRight: 10 }}>{item.flag}</Text>}
        <Text style={{ fontSize: 18 }}>{item.name}</Text>
      </View>
      {showIsdCode && <Text >{item.isd_code}</Text>}
    </TouchableOpacity>
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <SafeAreaView />
      <TouchableOpacity activeOpacity={0} onPress={showModel}>
        <Text style={{ fontSize: 40 }}>{code}</Text>
      </TouchableOpacity>
      
      <Modal
        animationType='fade'
        transparent={true}
        visible={showPicker}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!showPicker);
        }}
      >
        <View style={styles.listContainer}>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.modalView}>
              <View style={{ flexDirection: 'row', height: 50, width: '100%' }}>
                <TextInput
                  style={styles.inputSearch}
                  placeholder="Search"
                  clearButtonMode="always"
                  value={txtCountryName}
                  onChangeText={onSearch}
                />
              </View>
              <FlatList
                data={countries}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View
                  style={{
                    backgroundColor: 'gray',
                    height: 0.5,
                  }}
                />}
                keyExtractor={(item) => item.name}
              />
              <View style={{ flex: 1 }}>

              </View>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setShowPicker(!showPicker)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      </Modal>
    </View>
  )
}

CountryInfo.defaultProps = {
  showFlag: true,
  showIsdCode: true,
  styleSearch: {},
  styleItme: {},
  styleLabel: {},
  styleError: {},
};

export default CountryInfo

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#00000030',
    borderWidth: 0,
    borderColor: 'red',
    padding: 15
  },
  modalView: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
  },
  inputSearch: {
    flex: 1
  },
  button: {
    borderRadius: 20,
    padding: 10
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textAlign: "center"
  }
});
