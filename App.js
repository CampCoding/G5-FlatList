// import React from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   ScrollView,
//   Image,
//   ActivityIndicator,
//   RefreshControl,
// } from 'react-native';
// import images from './constants/images';
// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       allEmployees: [
//         {
//           name: 'ahmed',
//           age: '21',
//           job_title: 'Web Developer',
//           img: images.fci,
//         },
//         {
//           name: 'adel',
//           age: '21',
//           job_title: 'Mobile Developer',
//           img: images.github,
//         },
//         {
//           name: 'mona',
//           age: '21',
//           job_title: 'AI Developer',
//           img: images.quran,
//         },
//         {
//           name: 'ahmed',
//           age: '21',
//           job_title: 'Web Developer',
//           img: images.fci,
//         },
//         {
//           name: 'ahmed',
//           age: '21',
//           job_title: 'Web Developer',
//           img: images.fci,
//         },
//         {
//           name: 'adel',
//           age: '21',
//           job_title: 'Mobile Developer',
//           img: images.github,
//         },
//         {
//           name: 'mona',
//           age: '21',
//           job_title: 'AI Developer',
//           img: images.quran,
//         },
//         {
//           name: 'ahmed',
//           age: '21',
//           job_title: 'Web Developer',
//           img: images.fci,
//         },
//         {
//           name: 'ahmed',
//           age: '21',
//           job_title: 'Web Developer',
//           img: images.fci,
//         },
//         {
//           name: 'adel',
//           age: '21',
//           job_title: 'Mobile Developer',
//           img: images.github,
//         },
//         {
//           name: 'mona',
//           age: '21',
//           job_title: 'AI Developer',
//           img: images.quran,
//         },
//         {
//           name: 'ahmed',
//           age: '21',
//           job_title: 'Web Developer',
//           img: images.fci,
//         },
//       ],
//       isRefreshing: false,
//     };
//   }
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//         }}>
//         {/* <ScrollView showsVerticalScrollIndicator={false}> */}
//         <FlatList
//           showsVerticalScrollIndicator={false}
//           refreshControl={
//             <RefreshControl
//               refreshing={this.state.isRefreshing}
//               colors={['#f00', '#0f0']}
//               onRefresh={() => {
//                 this.setState({
//                   isRefreshing: true,
//                 });

//                 setTimeout(() => {
//                   this.setState({
//                     isRefreshing: false,
//                   });
//                 }, 2000);
//               }}
//             />
//           }
//           ListEmptyComponent={
//             <View>
//               <Text>Empty Data</Text>
//             </View>
//           }
//           ListHeaderComponent={
//             <View
//               style={{
//                 width: '100%',
//                 height: 65,
//                 backgroundColor: '#009999',
//               }}>
//               <Text>Employees</Text>
//             </View>
//           }
//           // ListFooterComponent={
//           //   <View
//           //     style={{
//           //       alignItems: 'center',
//           //       justifyContent: 'center',
//           //     }}>
//           //     <ActivityIndicator size="large" />
//           //   </View>
//           // }
//           onEndReached={() => {
//             alert('End FlatList');
//           }}
//           data={this.state.allEmployees}
//           renderItem={({item, index}) => (
//             <View
//               style={{
//                 width: '90%',
//                 padding: 10,
//                 borderRadius: 8,
//                 backgroundColor: '#fff',
//                 shadowColor: '#000',
//                 shadowOffset: {
//                   width: 0,
//                   height: 2,
//                 },
//                 shadowOpacity: 0.25,
//                 shadowRadius: 3.84,

//                 elevation: 5,
//                 flexDirection: 'row',
//                 alignSelf: 'center',
//                 marginVertical: 15,
//               }}>
//               <View>
//                 <Image
//                   source={item.img}
//                   style={{
//                     height: 60,
//                     width: 60,
//                     borderRadius: 60 / 2,
//                   }}
//                 />
//               </View>

//               <View
//                 style={{
//                   marginLeft: 10,
//                 }}>
//                 <Text>Name: {item.name}</Text>
//                 <Text>age: {item.age}</Text>
//                 <Text>job title: {item.job_title}</Text>
//               </View>
//             </View>
//           )}
//         />

//         {/* {this.state.allEmployees.length > 0 ? (
//             this.state.allEmployees.map((item, index) => <></>)
//           ) : (
//             <Text>No Data</Text>
//           )}
//         </ScrollView> */}
//       </View>
//     );
//   }
// }

import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import images from './constants/images';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allEmployees: [
        {
          name: 'ahmed',
          age: '21',
          job_title: 'Web Developer',
          img: images.fci,
        },
        {
          name: 'adel',
          age: '21',
          job_title: 'Mobile Developer',
          img: images.github,
        },
        {
          name: 'mona',
          age: '21',
          job_title: 'AI Developer',
          img: images.quran,
        },
        {
          name: 'ahmed',
          age: '21',
          job_title: 'Web Developer',
          img: images.fci,
        },
        {
          name: 'ahmed',
          age: '21',
          job_title: 'Web Developer',
          img: images.fci,
        },
        {
          name: 'adel',
          age: '21',
          job_title: 'Mobile Developer',
          img: images.github,
        },
        {
          name: 'mona',
          age: '21',
          job_title: 'AI Developer',
          img: images.quran,
        },
        {
          name: 'ahmed',
          age: '21',
          job_title: 'Web Developer',
          img: images.fci,
        },
      ],
      isRefreshing: false,
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.allEmployees}
          renderItem={({item, index}) => (
            <View
              style={{
                width: '90%',
                padding: 10,
                borderRadius: 8,
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: 15,
              }}>
              <View>
                <Image
                  source={item.img}
                  style={{
                    height: 60,
                    width: 60,
                    // borderRadius: 60 / 2,
                  }}
                  resizeMode="contain"
                />
              </View>

              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text>Name: {item.name}</Text>
                <Text>age: {item.age}</Text>
                <Text>job title: {item.job_title}</Text>
              </View>
            </View>
          )}
        />

        {/* <ScrollView>
          {this.state.allEmployees.map((item, index) => (
            <View
              style={{
                width: '90%',
                padding: 10,
                borderRadius: 8,
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: 15,
              }}>
              <View>
                <Image
                  source={item.img}
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 60 / 2,
                  }}
                />
              </View>

              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text>Name: {item.name}</Text>
                <Text>age: {item.age}</Text>
                <Text>job title: {item.job_title}</Text>
              </View>
            </View>
          ))}
        </ScrollView> */}
      </View>
    );
  }
}
