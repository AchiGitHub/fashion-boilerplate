import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, { multiply, useValue } from 'react-native-reanimated';
import Slide, { SLIDER_HEIGHT } from './Slide';
import { useScrollHandler, interpolateColor } from "react-native-redash/lib/module/v1";
import SubSlide from './SubSlide';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    slider: {
        height: SLIDER_HEIGHT,
        borderBottomRightRadius: 75,
        backgroundColor: 'cyan'
    },
    footer: {
        flex: 1
    },
    footerContent: { 
        flex: 1, 
        backgroundColor: 'white', 
        borderTopLeftRadius: 75,
        flexDirection: 'row'
    }
});

const slides = [
    {
        title: "Relaxed",
        subtitle: "Find Your Outfits",
        description: "Confused about your outfit? Don't worry! Find the best outfit here!",
        color: "#BFEAF5",
        picture: require("./assets/1.png")
    },
    {
        title: "Playful",
        subtitle: "Hear it First, Wear it First",
        description: "Hating the clothes in your wardrobe? Explore hundreds of outfits ideas",
        color: "#BEECC4",
        picture: require("./assets/2.png")
    },
    {
        title: "Excentric",
        subtitle: "Your Style, Your Way",
        description: "Create your individual & unique style and look amazing everyday",
        color: "#FFE4D9",
        picture: require("./assets/3.png")
    },
    {
        title: "Funky",
        subtitle: "Look Good, Feel Good",
        description: "Discover the latest trends in fashion and explore your personality",
        color: "#FFDDDD",
        picture: require("./assets/4.png")
    },
];

function Onboarding() {
    const scroll = useRef(null);

    const { scrollHandler, x } = useScrollHandler();
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color)
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView
                    ref={scroll}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    scrollEventThrottle={1}
                    {...scrollHandler}
                >
                    {
                        slides.map(({ title, picture }, index) => (
                            <Slide key={index} right={!!(index % 2)} label={title} picture={picture} />
                        ))
                    }
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}>
                    <Animated.View 
                        style={[
                            styles.footerContent, 
                            {   
                                width: width * slides.length, 
                                flex: 1, 
                                transform: [{translateX: multiply(x, -1)}]
                            }
                        ]}
                    >
                        {slides.map(({ subtitle, description }, index) => {
                            const last = index === slides.length - 1;
                            return (
                                <SubSlide
                                    key={index}
                                    onPress={() => {
                                        if(last){
                                        } else {
                                            scroll.current
                                                ?.getNode()
                                                .scrollTo({ x: width * (index + 1), animated: true });
                                        }
                                    }}
                                    {...{ subtitle, description, last }}
                                />
                            )
                        })
                        }
                    </Animated.View>
                </Animated.View>
            </View>
        </View>
    )
}

export default Onboarding
