import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import imageA from './assets/home-image-2.jpg';
import imageB from './assets/our-story-image-2.jpg';
import imageC from './assets/our-story-image-3.jpg';

const blockA = `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
`;

const blockB = `
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
`;

export default function AboutJunk() {
    return(
        <View style={styles.container}>
            <ScrollView>
                <Image source={imageA} style={{width: '100%', height: 300}}/>
                <Text style={styles.heading}>We are Diferent</Text>
                <Text style={styles.text}>{blockA}</Text>
                <Image source={imageB} style={{width: '100%', height: 300}}/>
                <Text style={styles.heading}>Loaders in pur field</Text>
                <Text style={styles.text}>{blockB}</Text>
                <Image source={imageC} style={{width: '100%', height: 300}}/>
                <Text style={styles.heading}>We are the Experts</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    heading: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        paddingTop: 5
    },
    text: {
        fontFamily: 'OpenSans'
    }
});