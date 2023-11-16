import { FlatList, Image, Text, StyleSheet, View, ScrollView } from 'react-native';

import Logo from '../../assets/logo.svg'
import Message from '../../assets/message.svg'
import Stroke from '../../assets/stroke.svg'
import Foto from '../../assets/foto.png'
import Foto2 from '../../assets/foto2.png'
import Foto3 from '../../assets/foto3.png'
import Foto4 from '../../assets/foto4.png'
import Points from '../../assets/points.svg'
import Bookmark from '../../assets/Bookmark.svg'
import image from '../../assets/image.png'
import Heart from '../../assets/Heart.svg'
import Comment from '../../assets/Comment.svg'
import Share from '../../assets/Share.svg'


const DATA = [
  {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: Foto,
  },

  {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: Foto2,
  },

  {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: Foto3,
  },

  {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: Foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: Foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: Foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: Foto4,
  }, {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: Foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: Foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: Foto4,
  },
]

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <View style={styles.headerOptions}>
          <Stroke />
          <Message />
        </View>
      </View>


      <ScrollView style={{ width: "100%" }}>
        <View style={styles.stories}>
          <FlatList
            horizontal={true}
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <View style={styles.storiesCard} key={item.item.id}>
                <Image style={styles.storiesCardImage}
                  source={item.item.photoUrl} />
              </View>
            )}
          />
        </View>

        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image style={styles.contentHeaderLeftImage} source={Foto} />
              <Text style={styles.contentHeaderLeftImageText} >Maria Joaquina </Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Image source={image} />
          </View>

          <View style={styles.contentFooter}>
            <View style={{
              width: "100%", flexDirection: "row",
              justifyContent: "space-between",
            }}>
              <View style={styles.contentFooterLeft}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>
            <View style={{
              marginTop: 12,
              gap: 10,
            }}>
              <Text style={{
                color: "#FFF"
              }}>
                Residencia em TIC Software SerraTec
              </Text>

              <Text style={{
                color: "#FFF"
              }}>
                ver todos os e comentários
              </Text>

              <Text style={{
                color: "#FFF",
                fontSize: 10
              }}>
                3 horas atrás  ver tradução
              </Text>
            </View>
          </View>
        </View>





        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image style={styles.contentHeaderLeftImage} source={Foto} />
              <Text style={styles.contentHeaderLeftImageText} >Cirilo </Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Image source={image} />
          </View>

          <View style={styles.contentFooter}>
            <View style={{
              width: "100%", flexDirection: "row",
              justifyContent: "space-between",
            }}>
              <View style={styles.contentFooterLeft}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>
            <View style={{
              marginTop: 12,
              gap: 10,
            }}>
              <Text style={{
                color: "#FFF"
              }}>
                Residencia em TIC Software SerraTec
              </Text>

              <Text style={{
                color: "#FFF"
              }}>
                ver todos os e comentários
              </Text>

              <Text style={{
                color: "#FFF",
                fontSize: 10
              }}>
                3 horas atrás  ver tradução
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image style={styles.contentHeaderLeftImage} source={Foto} />
              <Text style={styles.contentHeaderLeftImageText} >Valéria </Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Image source={image} />
          </View>

          <View style={styles.contentFooter}>
            <View style={{
              width: "100%", flexDirection: "row",
              justifyContent: "space-between",
            }}>
              <View style={styles.contentFooterLeft}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>
            <View style={{
              marginTop: 12,
              gap: 10,
            }}>
              <Text style={{
                color: "#FFF"
              }}>
                Residencia em TIC Software SerraTec
              </Text>

              <Text style={{
                color: "#FFF"
              }}>
                ver todos os e comentários
              </Text>

              <Text style={{
                color: "#FFF",
                fontSize: 10
              }}>
                3 horas atrás  ver tradução
              </Text>
            </View>
          </View>
        </View>


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  header: {
    marginTop: 40,
    padding: 10,
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerOptions: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  stories: {
    width: "100%",
    height: 114,
    paddingLeft: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  storiesCard: {
    marginRight: 14,

  },
  storiesCardImage: {
    width: 64,
    height: 64,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#f7855A",
    padding: 2,
  },
  content: {
    width: '100%',
    marginBottom: 10,
  },
  contentHeader: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  contentHeaderLeft: {

    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
  },
  contentHeaderLeftImageText: {
    color: "#fff",
  },
  contentImage: {
    width: "100%",
    height: 355,
  },
  contentFooter: {
    width: "100%",
    paddingHorizontal: 10,
    margingTop: 10,
  },
  contentFooterLeft: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10
  },

});